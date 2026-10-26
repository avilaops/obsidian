# Captura e consulta no Obsidian

Abra a pasta `Conhecimento` como um vault no Obsidian. Ela contém modelos, tabela Bases em `APIs.base` e a referência DocuSeal dividida em 22 endpoints. A referência integral inclui também os webhooks e explicações gerais.

## Web Clipper

Nas configurações da extensão Web Clipper, importe os arquivos JSON de `configuracao/web-clipper`, um por vez. Selecione o vault Conhecimento como destino na extensão. O modelo DocuSeal usa um gatilho pela URL; o modelo geral é escolhido manualmente. Configurações da extensão ficam no navegador: fazer pull não as instala.

O gatilho seleciona o modelo ao abrir o Clipper naquela URL. Não observa cliques nem extrai automaticamente todas as páginas visitadas.

## Dividir uma referência

Salve o Markdown capturado e execute, a partir da raiz do repositório:

```sh
python tools/import_api.py caminho/recorte.md --service NomeDoServico --output Conhecimento/APIs
```

Requer Python 3.10 ou superior, sem dependências externas. Reconhece títulos Markdown seguidos de uma declaração como `GET /submissions`. Preserva os blocos de código. Documentações com outras estruturas devem ser adaptadas; não é um extrator universal de HTML nem um importador OpenAPI.

O script gera uma nota por endpoint, um índice e uma cópia integral. Repetir com o mesmo conteúdo é seguro. Se um destino tiver conteúdo diferente, a execução para antes de substituir arquivos; para uma nova versão, use outra pasta de saída. Nomes recebem hash para evitar colisões entre rotas.

## Processamento no GitHub

Envie recortes para `Conhecimento/Clippings/API/<servico>.md`. O workflow gera as notas e oferece um artefato para download. Ele não grava de volta na main. Baixe o artefato e copie o conteúdo para o vault. Também pode executar o workflow manualmente na aba Actions.

Não coloque tokens, senhas ou exemplos com dados pessoais nos recortes. Use `API_KEY` nos exemplos.
