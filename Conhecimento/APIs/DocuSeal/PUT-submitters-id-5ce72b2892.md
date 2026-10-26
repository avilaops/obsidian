---
title: "Update a submitter"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "PUT"
rota: "/submitters/{id}"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Update a submitter

Copy as Markdown

put /submitters/{id}

The API endpoint allows you to update submitter details, pre-fill or update field values and re-send emails.  
**Related Guides**  
[Automatically sign documents via API](https://www.docuseal.com/guides/pre-fill-pdf-document-form-fields-with-api#automatically-sign-documents-via-api)

Parameters

id Integer required

The unique identifier of the submitter.

Example 500001

Request Body Properties

name String

The name of the submitter.

email String

The email address of the submitter.

Example john.doe@example.com

phone String

The phone number of the submitter, formatted according to the E.164 standard.

Example +1234567890

values Object

An object with pre-filled values for the submission. Use field names for keys of the object. For more configurations see `fields` param.

external\_id String

Your application-specific unique string key to identify this submitter within your app.

send\_email Boolean

Set `true` to re-send signature request emails.

send\_sms Boolean

Set `true` to re-send signature request via phone number SMS.

Default false

reply\_to String

Specify Reply-To address to use in the notification emails.

completed Boolean

Pass `true` to mark submitter as completed and auto-signed via API.

Metadata object with additional submitter information.

Example { "customField": "value" }

completed\_redirect\_url String

Submitter specific URL to redirect to after the submission completion.

require\_phone\_2fa Boolean

Set to `true` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.

Default false

require\_email\_2fa Boolean

Set to `true` to require email 2FA verification via a one-time code sent to the email address in order to access the documents.

Default false

message Object

Custom signature request email message.

subject String

Custom signature request email subject.

body String

Custom signature request email body. Can include the following variables: {{template.name}}, {{submitter.link}}, {{account.name}}.

fields Array

A list of configurations for template document form fields.

name String required

Document template field name.

Example First Name

default\_value String | Integer | Number | Boolean | Array

Default value of the field. Use base64 encoded file or a public URL to the image file to set default signature or image fields.

Example Acme

readonly Boolean

Set `true` to make it impossible for the submitter to edit predefined field value.

Default false

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submitters/500001", {
  method: "PUT",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    email: "john.doe@example.com",
    fields: [
      {
        name: "First Name",
        default_value: "Acme"
      }
    ]
  })
});

const submitter = await resp.json();
```
```
{
  "id": 1,
  "submission_id": 12,
  "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
  "email": "submitter@example.com",
  "slug": "dsEeWrhRD8yDXT",
  "sent_at": "2023-12-14T15:45:49.011Z",
  "opened_at": "2023-12-14T15:48:23.011Z",
  "completed_at": "2023-12-10T15:49:21.701Z",
  "declined_at": null,
  "created_at": "2023-12-14T15:48:17.173Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "name": "John Doe",
  "phone": "+1234567890",
  "status": "completed",
  "external_id": null,
  "metadata": {},
  "preferences": {},
  "values": [
    {
      "field": "Full Name",
      "value": "John Doe"
    }
  ],
  "documents": [],
  "role": "First Party",
  "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
}
```

