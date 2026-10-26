---
title: "Create a template from HTML Pro"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "POST"
rota: "/templates/html"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Create a template from HTML Pro

Copy as Markdown

post /templates/html

The API endpoint provides the functionality to seamlessly generate a PDF document template by utilizing the provided HTML content while incorporating pre-defined fields.  
**Related Guides**  
[Create PDF document fillable form with HTML](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api)

Request Body Properties

html String

HTML template with field tags.

Example \<p>Lorem Ipsum is simply dummy text of the \<text-field name="Industry" role="First Party" required="false" style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px"> \</text-field> and typesetting industry\</p>

html\_header String

HTML template of the header to be displayed on every page.

HTML template of the footer to be displayed on every page.

name String

Template name. Random uuid will be assigned when not specified.

Example Test Template

size String

Page size. Letter 8.5 x 11 will be assigned when not specified.

Default Letter

Possible values Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6

Example A4

external\_id String

Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new HTML.

Example 714d974e-83d8-11ee-b962-0242ac120002

folder\_name String

The folder's name in which the template should be created.

shared\_link Boolean

Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default true

documents Array

The list of documents built from HTML. Can be used to create a template with multiple documents. Leave `documents` param empty when using a top-level `html` param for a template with a single document.

html String required

HTML template with field tags.

Example \<p>Lorem Ipsum is simply dummy text of the \<text-field name="Industry" role="First Party" required="false" style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px"> \</text-field> and typesetting industry\</p>

name String

Document name. Random uuid will be assigned when not specified.

Example Test Document

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/html", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    html: \`<p>Lorem Ipsum is simply dummy text of the
<text-field
  name="Industry"
  role="First Party"
  required="false"
  style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px">
</text-field>
and typesetting industry</p>
\`,
    name: "Test Template"
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
  "shared_link": true,
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

