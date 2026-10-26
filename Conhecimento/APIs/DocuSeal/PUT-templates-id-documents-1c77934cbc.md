---
title: "Update template documents Pro"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "PUT"
rota: "/templates/{id}/documents"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Update template documents Pro

Copy as Markdown

put /templates/{id}/documents

The API endpoint allows you to add, remove or replace documents in the template with provided PDF/DOCX file or HTML content.

Parameters

id Integer required

The unique identifier of the document template.

Example 1000001

Request Body Properties

documents Array

The list of documents to add or replace in the template.

name String

Document name. Random uuid will be assigned when not specified.

Example Test Template

file String

Base64-encoded content of the PDF or DOCX file or downloadable file URL. Leave it empty if you create a new document using HTML param.

html String

HTML template with field tags. Leave it empty if you add a document via PDF or DOCX base64 encoded file param or URL.

position Integer

Position of the document. By default will be added as the last document in the template.

Example 0

replace Boolean

Set to `true` to replace existing document with a new file at `position`. Existing document fields will be transferred to the new document if it doesn't contain any fields.

Default false

remove Boolean

Set to `true` to remove existing document at given `position` or with given `name`.

Default false

merge Boolean

Set to `true` to merge all existing and new documents into a single PDF document in the template.

Default false

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001/documents", {
  method: "PUT",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    documents: [
      {
        file: "string"
      }
    ]
  })
});

const template = await resp.json();
```
```
{
  "id": 3,
  "slug": "ZQpF222rFBv71q",
  "name": "Demo Template",
  "schema": [
    {
      "name": "Demo Template",
      "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "required": false,
      "type": "text",
      "uuid": "a06c49f6-4b20-4442-ac7f-c1040d2cf1ac",
      "submitter_uuid": "93ba628c-5913-4456-a1e9-1a81ad7444b3",
      "areas": [
        {
          "page": 0,
          "attachment_uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
          "x": 0.403158189124654,
          "y": 0.04211750189825361,
          "w": 0.100684625476058,
          "h": 0.01423690205011389
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "Submitter",
      "uuid": "93ba628c-5913-4456-a1e9-1a81ad7444b3"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 1,
  "folder_name": "Default",
  "external_id": "f0b4714f-e44b-4993-905b-68b4451eef8c",
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 3,
      "uuid": "09a8bc73-a7a9-4fd9-8173-95752bdf0af5",
      "url": "https://docuseal.com/file/hash/Test%20Template.pdf"
    }
  ]
}
```

