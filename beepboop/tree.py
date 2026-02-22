import os

for root, dirs, files in os.walk(r'..'):
    level = root.count(os.sep) - os.path.abspath(r'..').count(os.sep)
    indent = '  ' * level
    print(f'{indent}{os.path.basename(root)}/')
    for file in files:
        print(f'{indent}  {file}')