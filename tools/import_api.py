"""Split a clipped Markdown API reference into searchable Obsidian notes.

Usage: python tools/import_api.py source.md --service DocuSeal --output Conhecimento/APIs
Only Python's standard library is required. Existing different files are never replaced.
"""
import argparse
import hashlib
import json
import re
from pathlib import Path


def split_reference(text):
    lines = text.splitlines(keepends=True)
    headings, fence = [], None
    for i, line in enumerate(lines):
        marker = re.match(r'^\s*(`{3,}|~{3,})', line)
        if marker:
            token = marker[1]
            if fence is None:
                fence = token
            elif token[0] == fence[0] and len(token) >= len(fence):
                fence = None
            continue
        if fence is None and re.match(r'^#{1,6}\s+', line):
            headings.append(i)
    sections = []
    for n, start in enumerate(headings):
        end = headings[n + 1] if n + 1 < len(headings) else len(lines)
        block = ''.join(lines[start:end])
        # An endpoint must be a standalone declaration, not an example inside code.
        declaration = re.search(r'(?im)^\s*(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)\s+(/\S*)\s*$', block)
        if declaration:
            sections.append((declaration[1].upper(), declaration[2], lines[start].lstrip('#').strip(), block))
    return sections


def safe_name(value):
    return re.sub(r'[^\w.-]+', '-', value, flags=re.UNICODE).strip('-.') or 'raiz'


def write_safe(path, content):
    if path.exists() and path.read_text(encoding='utf-8') != content:
        raise ValueError(f'Arquivo existente diferente: {path}. Use outra pasta de saída.')
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding='utf-8')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path)
    parser.add_argument('--service', required=True)
    parser.add_argument('--output', type=Path, default=Path('Conhecimento/APIs'))
    args = parser.parse_args()
    text = args.source.read_text(encoding='utf-8-sig')
    sections = split_reference(text)
    if not sections:
        parser.error('Nenhum endpoint reconhecido; nenhum arquivo foi criado.')
    directory = args.output / safe_name(args.service)
    source_match = re.search(r'(?m)^source:\s*[\"\x27]?([^\s\"\x27]+)', text)
    source = source_match[1] if source_match else ''
    files = {directory / 'Referencia-original.md': text}
    rows = ['# ' + args.service, '', 'Referência completa: [[Referencia-original]]', '', '| Operação | Método | Rota |', '|---|---|---|']
    seen = set()
    for method, route, title, body in sections:
        key = (method, route)
        if key in seen:
            raise ValueError(f'Endpoint duplicado: {method} {route}')
        seen.add(key)
        digest = hashlib.sha256(f'{method} {route}'.encode()).hexdigest()[:10]
        name = f'{method}-{safe_name(route)[:100]}-{digest}'
        properties = {'title': title, 'servico': args.service, 'tipo': 'endpoint', 'metodo': method, 'rota': route, 'source': source}
        frontmatter = '---\n' + ''.join(f'{k}: {json.dumps(v, ensure_ascii=False)}\n' for k, v in properties.items()) + 'tags: [api, endpoint]\n---\n\n'
        files[directory / (name + '.md')] = frontmatter + body
        rows.append(f'| [[{name}]] | {method} | `{route.replace(chr(124), "&#124;")}` |')
    files[directory / 'Indice.md'] = '\n'.join(rows) + '\n'
    # Preflight every destination before writing anything.
    for path, content in files.items():
        if path.exists() and path.read_text(encoding='utf-8') != content:
            raise ValueError(f'Arquivo existente diferente: {path}')
    for path, content in files.items():
        write_safe(path, content)
    print(f'{len(sections)} endpoints; original e índice preservados em {directory}')


if __name__ == '__main__':
    main()
