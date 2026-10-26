---
title: "Archive a template"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "DELETE"
rota: "/templates/{id}"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Archive a template

Copy as Markdown

delete /templates/{id}

The API endpoint allows you to archive a document template.

Parameters

id Integer required

The unique identifier of the document template.

Example 1000001

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001", {
  method: "DELETE",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

await resp.json();
```
```
{
  "id": 1,
  "archived_at": "2023-12-14T15:50:21.799Z"
}
```

