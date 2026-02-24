#!/usr/bin/env python3
"""
Markdown to HTML Converter for OUIRISE
Converts .md files to themed HTML pages at /routeistitle/index.html
"""

import os
import re
import markdown
from pathlib import Path

# HTML Template with OUIRISE theme
HTML_TEMPLATE = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | 0x6C6F6C</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {{
            --void: #0a0a0a;
            --tactical: #141414;
            --surface: #1f1f1f;
            --signal: #f5f5f5;
            --ghost: #666666;
            --maroon: #800000;
            --bright-maroon: #a50000;
        }}

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        body {{
            background-color: var(--void);
            color: var(--signal);
            font-family: 'JetBrains Mono', monospace;
            line-height: 1.6;
            overflow-x: hidden;
        }}

        /* Grid Background */
        body::before {{
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(165, 0, 0, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(165, 0, 0, 0.06) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: -1;
            pointer-events: none;
        }}

        /* Header */
        header {{
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 50;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--surface);
            padding: 1rem 2rem;
        }}

        .header-content {{
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}

        .logo {{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.5rem;
            color: var(--bright-maroon);
            text-decoration: none;
            letter-spacing: 2px;
        }}

        .nav {{
            display: flex;
            gap: 2rem;
        }}

        .nav a {{
            color: var(--ghost);
            text-decoration: none;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: color 0.2s;
        }}

        .nav a:hover {{
            color: var(--bright-maroon);
        }}

        /* Main Content */
        main {{
            max-width: 900px;
            margin: 0 auto;
            padding: 6rem 2rem 4rem;
        }}

        /* Breadcrumb */
        .breadcrumb {{
            font-size: 0.7rem;
            color: var(--ghost);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 2rem;
        }}

        .breadcrumb a {{
            color: var(--ghost);
            text-decoration: none;
        }}

        .breadcrumb a:hover {{
            color: var(--bright-maroon);
        }}

        .breadcrumb-sep {{
            margin: 0 0.5rem;
            color: var(--surface);
        }}

        /* Title */
        .page-title {{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 3rem;
            letter-spacing: 3px;
            margin-bottom: 0.5rem;
            color: var(--signal);
        }}

        .page-meta {{
            font-size: 0.75rem;
            color: var(--ghost);
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--surface);
        }}

        /* Markdown Content */
        .content {{
            font-size: 0.9rem;
            line-height: 1.8;
        }}

        .content h1 {{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 2rem;
            letter-spacing: 2px;
            margin: 2.5rem 0 1rem;
            color: var(--bright-maroon);
            font-weight: 400;
        }}

        .content h2 {{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.5rem;
            letter-spacing: 1.5px;
            margin: 2rem 0 1rem;
            color: var(--signal);
            font-weight: 400;
        }}

        .content h3 {{
            font-size: 1rem;
            font-weight: 600;
            margin: 1.5rem 0 0.75rem;
            color: var(--signal);
            text-transform: uppercase;
            letter-spacing: 1px;
        }}

        .content h4 {{
            font-size: 0.85rem;
            font-weight: 600;
            margin: 1.25rem 0 0.5rem;
            color: var(--ghost);
        }}

        .content p {{
            margin-bottom: 1rem;
            color: var(--signal);
        }}

        .content a {{
            color: var(--bright-maroon);
            text-decoration: none;
        }}

        .content a:hover {{
            text-decoration: underline;
        }}

        .content code {{
            background: var(--tactical);
            padding: 0.2rem 0.4rem;
            font-size: 0.8rem;
            color: var(--bright-maroon);
            border: 1px solid var(--surface);
        }}

        .content pre {{
            background: var(--tactical);
            border: 1px solid var(--surface);
            padding: 1.5rem;
            overflow-x: auto;
            margin: 1.5rem 0;
        }}

        .content pre code {{
            background: transparent;
            border: none;
            padding: 0;
            color: var(--signal);
        }}

        .content ul, .content ol {{
            margin: 1rem 0 1rem 1.5rem;
        }}

        .content li {{
            margin-bottom: 0.5rem;
        }}

        .content blockquote {{
            border-left: 3px solid var(--bright-maroon);
            padding-left: 1.5rem;
            margin: 1.5rem 0;
            color: var(--ghost);
            font-style: italic;
        }}

        .content table {{
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            font-size: 0.8rem;
        }}

        .content th, .content td {{
            padding: 0.75rem;
            text-align: left;
            border: 1px solid var(--surface);
        }}

        .content th {{
            background: var(--tactical);
            color: var(--bright-maroon);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.7rem;
        }}

        .content tr:nth-child(even) {{
            background: rgba(255,255,255,0.02);
        }}

        .content hr {{
            border: none;
            border-top: 1px solid var(--surface);
            margin: 2rem 0;
        }}

        .content strong {{
            color: var(--bright-maroon);
            font-weight: 600;
        }}

        /* Footer */
        footer {{
            max-width: 900px;
            margin: 4rem auto 0;
            padding: 2rem;
            border-top: 1px solid var(--surface);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}

        .footer-sigil {{
            font-size: 1.2rem;
            color: var(--bright-maroon);
        }}

        .footer-text {{
            font-size: 0.7rem;
            color: var(--ghost);
            text-transform: uppercase;
            letter-spacing: 1px;
        }}

        /* Scrollbar */
        ::-webkit-scrollbar {{
            width: 6px;
        }}

        ::-webkit-scrollbar-track {{
            background: var(--void);
        }}

        ::-webkit-scrollbar-thumb {{
            background: var(--surface);
        }}

        ::-webkit-scrollbar-thumb:hover {{
            background: var(--bright-maroon);
        }}

        /* Mobile */
        @media (max-width: 768px) {{
            .nav {{
                display: none;
            }}
            
            .page-title {{
                font-size: 2rem;
            }}
            
            main {{
                padding: 5rem 1.5rem 3rem;
            }}
        }}
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <a href="/0x6C6F6C/" class="logo">0x6C6F6C</a>
            <nav class="nav">
                <a href="/0x6C6F6C/">Fleet</a>
                <a href="/0x6C6F6C/moves/">Moves</a>
                <a href="/0x6C6F6C/positions/">Positions</a>
                <a href="/0x6C6F6C/shards/">Shards</a>
            </nav>
        </div>
    </header>

    <main>
        <div class="breadcrumb">
            <a href="/0x6C6F6C/">0x6C6F6C</a>
            <span class="breadcrumb-sep">//</span>
            <a href="{parent_url}">{parent_name}</a>
            <span class="breadcrumb-sep">//</span>
            <span>{title}</span>
        </div>

        <h1 class="page-title">{title}</h1>
        <div class="page-meta">{meta}</div>

        <div class="content">
{content}
        </div>
    </main>

    <footer>
        <span class="footer-sigil">俊达</span>
        <span class="footer-text">0x6C6F6C // {parent_name} // {title}</span>
    </footer>
</body>
</html>'''


def slugify(text):
    """Convert text to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')


def convert_md_to_html(md_path, output_dir, parent_name, parent_url):
    """Convert a single markdown file to HTML"""
    # Read markdown
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # Get title from first line or filename
    title = os.path.splitext(os.path.basename(md_path))[0].upper()
    first_line = md_content.strip().split('\n')[0] if md_content.strip() else ''
    if first_line and not first_line.startswith('#') and len(first_line) < 50:
        title = first_line.strip()
    elif first_line.startswith('#'):
        title = first_line.lstrip('#').strip()
    
    # Convert markdown to HTML
    html_content = markdown.markdown(
        md_content,
        extensions=['fenced_code', 'tables', 'toc']
    )
    
    # Get file modification time for meta
    mtime = os.path.getmtime(md_path)
    from datetime import datetime
    meta = f"Documentation // Last updated: {datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')}"
    
    # Generate HTML
    html = HTML_TEMPLATE.format(
        title=title,
        content=html_content,
        meta=meta,
        parent_name=parent_name,
        parent_url=parent_url
    )
    
    # Create output directory
    slug = slugify(os.path.splitext(os.path.basename(md_path))[0])
    output_path = os.path.join(output_dir, slug, 'index.html')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Write HTML
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)
    
    return slug, title


def create_index_page(output_path, title, items, parent_url, description=""):
    """Create an index page for a directory"""
    items_html = "\n".join([
        f'''        <div class="doc-card">
            <a href="{slug}/" class="doc-title">{item_title}</a>
            <div class="doc-meta">{slug}</div>
        </div>'''
        for slug, item_title in items
    ])
    
    html = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | 0x6C6F6C</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {{
            --void: #0a0a0a;
            --tactical: #141414;
            --surface: #1f1f1f;
            --signal: #f5f5f5;
            --ghost: #666666;
            --maroon: #800000;
            --bright-maroon: #a50000;
        }}

        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}

        body {{
            background-color: var(--void);
            color: var(--signal);
            font-family: 'JetBrains Mono', monospace;
            line-height: 1.6;
        }}

        body::before {{
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(165, 0, 0, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(165, 0, 0, 0.06) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: -1;
            pointer-events: none;
        }}

        header {{
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 50;
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--surface);
            padding: 1rem 2rem;
        }}

        .header-content {{
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}

        .logo {{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.5rem;
            color: var(--bright-maroon);
            text-decoration: none;
            letter-spacing: 2px;
        }}

        .nav {{
            display: flex;
            gap: 2rem;
        }}

        .nav a {{
            color: var(--ghost);
            text-decoration: none;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: color 0.2s;
        }}

        .nav a:hover {{
            color: var(--bright-maroon);
        }}

        main {{
            max-width: 1000px;
            margin: 0 auto;
            padding: 6rem 2rem 4rem;
        }}

        .page-title {{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 3.5rem;
            letter-spacing: 4px;
            margin-bottom: 1rem;
        }}

        .page-desc {{
            color: var(--ghost);
            font-size: 0.9rem;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--surface);
        }}

        .doc-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
        }}

        .doc-card {{
            background: var(--tactical);
            border: 1px solid var(--surface);
            padding: 1.5rem;
            transition: all 0.2s;
        }}

        .doc-card:hover {{
            border-color: var(--bright-maroon);
            transform: translateY(-2px);
        }}

        .doc-title {{
            font-family: 'Bebas Neue', sans-serif;
            font-size: 1.5rem;
            color: var(--signal);
            text-decoration: none;
            letter-spacing: 1px;
            display: block;
            margin-bottom: 0.5rem;
        }}

        .doc-title:hover {{
            color: var(--bright-maroon);
        }}

        .doc-meta {{
            font-size: 0.7rem;
            color: var(--ghost);
            text-transform: lowercase;
        }}

        footer {{
            max-width: 1000px;
            margin: 4rem auto 0;
            padding: 2rem;
            border-top: 1px solid var(--surface);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }}

        .footer-sigil {{
            font-size: 1.2rem;
            color: var(--bright-maroon);
        }}

        .footer-text {{
            font-size: 0.7rem;
            color: var(--ghost);
            text-transform: uppercase;
            letter-spacing: 1px;
        }}

        @media (max-width: 768px) {{
            .nav {{ display: none; }}
            .page-title {{ font-size: 2.5rem; }}
        }}
    </style>
</head>
<body>
    <header>
        <div class="header-content">
            <a href="/0x6C6F6C/" class="logo">0x6C6F6C</a>
            <nav class="nav">
                <a href="/0x6C6F6C/">Fleet</a>
                <a href="/0x6C6F6C/moves/">Moves</a>
                <a href="/0x6C6F6C/positions/">Positions</a>
                <a href="/0x6C6F6C/shards/">Shards</a>
            </nav>
        </div>
    </header>

    <main>
        <h1 class="page-title">{title}</h1>
        <p class="page-desc">{description}</p>

        <div class="doc-grid">
{items_html}
        </div>
    </main>

    <footer>
        <span class="footer-sigil">俊达</span>
        <span class="footer-text">0x6C6F6C // {title}</span>
    </footer>
</body>
</html>'''
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(html)


def main():
    base_dir = Path(__file__).parent
    
    # Process moves/
    moves_dir = base_dir / 'moves'
    if moves_dir.exists():
        moves_items = []
        for md_file in sorted(moves_dir.glob('*.md')):
            slug, title = convert_md_to_html(
                str(md_file),
                str(moves_dir),
                'Moves',
                '/0x6C6F6C/moves/'
            )
            moves_items.append((slug, title))
            print(f'Created: moves/{slug}/index.html')
        
        # Create moves index
        create_index_page(
            str(moves_dir / 'index.html'),
            'MOVES',
            moves_items,
            '/0x6C6F6C/',
            'Operational playbooks, creative frameworks, and tactical documentation for agent execution.'
        )
        print('Created: moves/index.html')
    
    # Process positions/
    positions_dir = base_dir / 'positions'
    if positions_dir.exists():
        positions_items = []
        for md_file in sorted(positions_dir.glob('*.md')):
            slug, title = convert_md_to_html(
                str(md_file),
                str(positions_dir),
                'Positions',
                '/0x6C6F6C/positions/'
            )
            positions_items.append((slug, title))
            print(f'Created: positions/{slug}/index.html')
        
        # Create positions index
        create_index_page(
            str(positions_dir / 'index.html'),
            'POSITIONS',
            positions_items,
            '/0x6C6F6C/',
            'Role definitions, fleet organization, and engagement frameworks. The structural DNA of agent operations.'
        )
        print('Created: positions/index.html')
    
    # Process shards/
    shards_dir = base_dir / 'shards'
    if shards_dir.exists():
        shards_items = []
        for md_file in sorted(shards_dir.glob('*.md')):
            slug, title = convert_md_to_html(
                str(md_file),
                str(shards_dir),
                'Shards',
                '/0x6C6F6C/shards/'
            )
            shards_items.append((slug, title))
            print(f'Created: shards/{slug}/index.html')
        
        # Create shards index
        create_index_page(
            str(shards_dir / 'index.html'),
            'SHARDS',
            shards_items,
            '/0x6C6F6C/',
            'Modular capabilities, licenses, and skill definitions. The building blocks of agent competence.'
        )
        print('Created: shards/index.html')
    
    print('\nAll documentation pages generated.')


if __name__ == '__main__':
    main()
