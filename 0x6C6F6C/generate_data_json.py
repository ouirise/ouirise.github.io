#!/usr/bin/env python3
"""
Generate data.json files for all documentation routes
For OpenAPI/RAG consumption
"""

import os
import json
import re
from pathlib import Path
from datetime import datetime

def slugify(text):
    """Convert text to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')

def extract_metadata(md_path):
    """Extract metadata from markdown file"""
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Get title from first line
    lines = content.strip().split('\n')
    title = os.path.splitext(os.path.basename(md_path))[0].upper()
    
    for line in lines[:5]:
        line = line.strip()
        if line and not line.startswith('---') and len(line) < 100:
            if line.startswith('#'):
                title = line.lstrip('#').strip()
            elif not title or title == os.path.splitext(os.path.basename(md_path))[0].upper():
                title = line
            break
    
    # Get first paragraph as description
    description = ""
    for line in lines[1:20]:
        line = line.strip()
        if line and not line.startswith('#') and not line.startswith('---') and not line.startswith('```'):
            if len(line) > 20:
                description = line[:200] + "..." if len(line) > 200 else line
                break
    
    # Get code blocks
    code_blocks = re.findall(r'```(\w+)?\n(.*?)```', content, re.DOTALL)
    
    # Get tags from content
    tags = []
    tag_patterns = [
        (r'\b(?:python|javascript|js|html|css|react|next|flask|express)\b', 'CODE'),
        (r'\b(?:ui|ux|design|interface|user experience)\b', 'DESIGN'),
        (r'\b(?:ai|ml|model|gpt|llm|agent)\b', 'AI'),
        (r'\b(?:strategy|tactical|operations|fleet)\b', 'OPS'),
        (r'\b(?:art|creative|aesthetic|visual)\b', 'ART'),
        (r'\b(?:scan|osint|recon|intelligence)\b', 'SEC'),
    ]
    
    content_lower = content.lower()
    for pattern, tag in tag_patterns:
        if re.search(pattern, content_lower) and tag not in tags:
            tags.append(tag)
    
    return {
        "title": title,
        "description": description,
        "tags": tags,
        "code_blocks": len(code_blocks),
        "word_count": len(content.split()),
        "last_modified": datetime.fromtimestamp(os.path.getmtime(md_path)).isoformat()
    }

def generate_data_json(md_path, output_dir, section, base_url):
    """Generate data.json for a markdown file"""
    metadata = extract_metadata(md_path)
    
    slug = slugify(os.path.splitext(os.path.basename(md_path))[0])
    url = f"{base_url}{slug}/"
    
    data = {
        "id": slug,
        "title": metadata["title"],
        "description": metadata["description"],
        "url": url,
        "section": section,
        "tags": metadata["tags"],
        "stats": {
            "word_count": metadata["word_count"],
            "code_blocks": metadata["code_blocks"]
        },
        "last_modified": metadata["last_modified"],
        "format": "documentation",
        "access_level": "public"
    }
    
    output_path = os.path.join(output_dir, slug, 'data.json')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    
    return data

def generate_section_index(section_dir, section_name, base_url):
    """Generate data.json for section index"""
    items = []
    
    for md_file in sorted(Path(section_dir).glob('*.md')):
        metadata = extract_metadata(str(md_file))
        slug = slugify(os.path.splitext(md_file.name)[0])
        
        items.append({
            "id": slug,
            "title": metadata["title"],
            "description": metadata["description"],
            "url": f"{base_url}{slug}/",
            "tags": metadata["tags"],
            "word_count": metadata["word_count"]
        })
    
    data = {
        "id": section_name.lower(),
        "title": section_name.upper(),
        "description": f"Documentation index for {section_name}",
        "url": base_url,
        "section": section_name,
        "items": items,
        "count": len(items),
        "last_updated": datetime.now().isoformat()
    }
    
    output_path = os.path.join(section_dir, 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    
    return data

def generate_master_index(base_dir):
    """Generate master data.json for 0x6C6F6C"""
    sections = []
    
    for section in ['moves', 'positions', 'shards']:
        section_path = os.path.join(base_dir, section, 'data.json')
        if os.path.exists(section_path):
            with open(section_path, 'r') as f:
                sections.append(json.load(f))
    
    data = {
        "id": "0x6C6F6C",
        "title": "Agent Fleet Documentation",
        "description": "Complete documentation for OUIRISE agent fleet operations",
        "url": "/0x6C6F6C/",
        "sections": sections,
        "total_documents": sum(s.get("count", 0) for s in sections),
        "last_updated": datetime.now().isoformat(),
        "api_version": "1.0"
    }
    
    output_path = os.path.join(base_dir, 'data.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
    
    return data

def main():
    base_dir = Path(__file__).parent
    
    # Process each section
    for section in ['moves', 'positions', 'shards']:
        section_dir = base_dir / section
        if not section_dir.exists():
            continue
        
        section_name = section.upper()
        base_url = f"/0x6C6F6C/{section}/"
        
        # Generate data.json for each doc
        for md_file in section_dir.glob('*.md'):
            if md_file.name == 'index.md':
                continue
            
            data = generate_data_json(
                str(md_file),
                str(section_dir),
                section_name,
                base_url
            )
            print(f"Generated: {section}/{data['id']}/data.json")
        
        # Generate section index
        section_data = generate_section_index(
            str(section_dir),
            section_name,
            base_url
        )
        print(f"Generated: {section}/data.json")
    
    # Generate master index
    master_data = generate_master_index(str(base_dir))
    print(f"Generated: data.json (master index)")
    
    print(f"\nTotal documents indexed: {master_data['total_documents']}")

if __name__ == '__main__':
    main()
