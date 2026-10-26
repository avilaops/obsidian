---
title: "Archive a submission"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "DELETE"
rota: "/submissions/{id}"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Archive a submission

Copy as Markdown

delete /submissions/{id}

The API endpoint allows you to archive a submission.

Parameters

id Integer required

The unique identifier of the submission.

Example 1001

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/1001", {
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

