---
title: "Update a template"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "PUT"
rota: "/templates/{id}"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Update a template

Copy as Markdown

put /templates/{id}

The API endpoint provides the functionality to move a document template to a different folder and update the name of the template.

Parameters

id Integer required

The unique identifier of the document template.

Example 1000001

Request Body Properties

name String

The name of the template.

Example New Document Name

folder\_name String

The folder's name to which the template should be moved.

Example New Folder

roles Array

An array of submitter role names to update the template with.

Example \["Agent","Customer"\]

archived Boolean

Set `false` to unarchive template.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001", {
  method: "PUT",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "New Document Name",
    folder_name: "New Folder"
  })
});

const template = await resp.json();
```
```
{
  "id": 1,
  "updated_at": "2023-12-14T15:50:21.799Z"
}
```

