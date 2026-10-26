---
title: "Create a template from PDF Pro"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "POST"
rota: "/templates/pdf"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Create a template from PDF Pro

Copy as Markdown

post /templates/pdf

The API endpoint provides the functionality to create a fillable document template for a PDF file. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.pdf](https://www.docuseal.com/examples/fieldtags.pdf) for more text tag formats. Or specify the exact pixel coordinates of the document fields using \`fields\` param.  
**Related Guides**  
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)

Request Body Properties

name String

Name of the template.

Example Test PDF

folder\_name String

The folder's name in which the template should be created.

external\_id String

Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new PDF.

Example unique-key

shared\_link Boolean

Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default true

documents Array required

An array of PDF documents to create a template.

name String required

Name of the document.

file String required

Base64-encoded content of the PDF file or downloadable file URL.

Example base64

fields Array

Fields are optional if you use {{...}} text tags to define fields in the document.

name String

Name of the field.

type String

Type of the field (e.g., text, signature, date, initials).

Possible values heading, text, signature, initials, date, number, image, checkbox, multiple, file, radio, select, cells, stamp, payment, phone, verification, kba, strikethrough

role String

Role name of the signer.

flatten Boolean

Remove PDF form fields from the documents.

Default false

Pass `false` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.

Default true

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/pdf", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test PDF",
    documents: [
      {
        name: "string",
        file: "base64",
        fields: [
          {
            name: "string",
            areas: [
              {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
                page: 1
              }
            ]
          }
        ]
      }
    ]
  })
});

const template = await resp.json();
```
```
{
  "id": 5,
  "slug": "s3ff992CoPjvaX",
  "name": "Demo PDF",
  "schema": [
    {
      "name": "Demo PDF",
      "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf"
    }
  ],
  "fields": [
    {
      "name": "Name",
      "type": "text",
      "required": true,
      "uuid": "d0bf3c0c-1928-40c8-80f9-d9f3c6ad4eff",
      "submitter_uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7",
      "areas": [
        {
          "page": 1,
          "attachment_uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
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
      "uuid": "0b0bff58-bc9a-475d-b4a9-2f3e5323faf7"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 1,
  "folder_name": "Default",
  "external_id": "c248ffba-ef81-48b7-8e17-e3cecda1c1c5",
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 7,
      "uuid": "48d2998f-266b-47e4-beb2-250ab7ccebdf",
      "url": "https://docuseal.com/file/hash/Demo%20PDF.pdf"
    }
  ]
}
```

