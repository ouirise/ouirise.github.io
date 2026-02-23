import os
from pathlib import Path
import json
import argparse

def build_filetree(directory: str) -> dict:
    """
    Recursively builds a hierarchical filetree from a given directory.

    Args:
        directory (str): Path to the target directory.

    Returns:
        dict: Nested dictionary representing the filetree.
    """
    root = Path(directory)
    tree = {}

    for entry in root.iterdir():
        if entry.is_file():
            tree[entry.name] = {"type": "file", "size": entry.stat().st_size}
        elif entry.is_dir():
            subtree = build_filetree(entry)
            tree[entry.name] = {"type": "directory", "children": subtree}

    return tree

def save_filetree(directory: str, output_file: str):
    """
    Builds the filetree and saves it to a JSON file.

    Args:
        directory (str): Target directory.
        output_file (str): Output file path.
    """
    tree = build_filetree(directory)
    with open(output_file, 'w') as f:
        json.dump(tree, f, indent=4)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Build a hierarchical filetree from a given directory.")
    parser.add_argument("directory", type=str, help="Target directory to scan")
    parser.add_argument("-o", "--output", type=str, default="./filetree.json", help="Output JSON file (default: ./filetree.json)")
    
    args = parser.parse_args()
    save_filetree(args.directory, args.output)
    print(f"Filetree generated and saved to {args.output}")