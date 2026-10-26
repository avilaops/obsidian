---
title: "Get submission documents"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "GET"
rota: "/submissions/{id}/documents"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Get submission documents

Copy as Markdown

get /submissions/{id}/documents

This endpoint returns a list of partially filled documents for a submission. If the submission has been completed, the final signed documents are returned.

Parameters

id Integer required

The unique identifier of the submission.

Example 1001

merge Boolean

When `true`, merges all documents into a single PDF.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/1001/documents", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const submission = await resp.json();
```
```
{
  "id": 1,
  "documents": [
    {
      "name": "example",
      "url": "https://docuseal.com/file/hash/example.pdf"
    }
  ]
}
```

