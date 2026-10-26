---
title: "Create a submission"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "POST"
rota: "/submissions"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Create a submission

Copy as Markdown

post /submissions

This API endpoint allows you to create signature requests (submissions) for a document template and send them to the specified submitters (signers).  
**Related Guides**  
[Send documents for signature via API](https://www.docuseal.com/guides/send-documents-for-signature-via-api)  
[Pre-fill PDF document form fields with API](https://www.docuseal.com/guides/pre-fill-pdf-document-form-fields-with-api)

Request Body Properties

template\_id Integer required

The unique identifier of the template. Document template forms can be created via the Web UI, [PDF and DOCX API](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form), or [HTML API](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api).

Example 1000001

send\_email Boolean

Set `false` to disable signature request emails sending.

Default true

send\_sms Boolean

Set `true` to send signature request via phone number and SMS.

Default false

order String

Pass `random` to send signature request emails to all parties right away. The order is `preserved` by default so the second party will receive a signature request email only after the document is signed by the first party.

Default preserved

Possible values random, preserved

completed\_redirect\_url String

Specify URL to redirect to after the submission completion.

bcc\_completed String

Specify BCC address to send signed documents to after the completion.

reply\_to String

Specify Reply-To address to use in the notification emails.

expire\_at String

Specify the expiration date and time after which the submission becomes unavailable for signature.

Example 2024-09-01 12:00:00 UTC

variables Object

Dynamic content variables object. Variable values can be strings, numbers, arrays, objects, or HTML content used to generate styled text, paragraphs, and tables in dynamic template documents.

Example {"variable\_name":"value"}

message Object

Custom signature request email message.

subject String

Custom signature request email subject.

body String

Custom signature request email body. Can include variables such as {{template.name}}, {{submission.name}}, {{submitter.link}}, {{account.name}}.

submitters Array required

The list of submitters for the submission.

name String

The name of the submitter.

role String

The role name or title of the submitter.

Example First Party

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

completed Boolean

Pass `true` to mark submitter as completed and auto-signed via API.

Metadata object with additional submitter information.

Example { "customField": "value" }

send\_email Boolean

Set `false` to disable signature request emails sending only for this submitter.

Default true

send\_sms Boolean

Set `true` to send signature request via phone number and SMS.

Default false

reply\_to String

Specify Reply-To address to use in the notification emails for this submitter.

completed\_redirect\_url String

Submitter specific URL to redirect to after the submission completion.

order Integer

The order of the submitter in the workflow (e.g., 0 for the first signer, 1 for the second, etc.). Use the same order number to create order groups. By default, submitters are ordered as in the submitters array.

require\_phone\_2fa Boolean

Set to `true` to require phone 2FA verification via a one-time code sent to the phone number in order to access the documents.

Default false

require\_email\_2fa Boolean

Set to `true` to require email 2FA verification via a one-time code sent to the email address in order to access the documents.

Default false

message Object

Custom signature request email message for the submitter.

subject String

Custom signature request email subject for the submitter.

body String

Custom signature request email body for the submitter. Can include variables such as {{template.name}}, {{submission.name}}, {{submitter.link}}, {{account.name}}.

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

roles Array

A list of roles for the submitter. Use this param to merge multiple roles into one submitter.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    template_id: 1000001,
    send_email: true,
    submitters: [
      {
        role: "First Party",
        email: "john.doe@example.com"
      }
    ]
  })
});

const submitters = await resp.json();
```
```
[
  {
    "id": 1,
    "submission_id": 1,
    "uuid": "884d545b-3396-49f1-8c07-05b8b2a78755",
    "email": "john.doe@example.com",
    "slug": "pAMimKcyrLjqVt",
    "sent_at": "2023-12-13T23:04:04.252Z",
    "opened_at": null,
    "completed_at": null,
    "declined_at": null,
    "created_at": "2023-12-14T15:50:21.799Z",
    "updated_at": "2023-12-14T15:50:21.799Z",
    "name": "string",
    "phone": "+1234567890",
    "external_id": "2321",
    "metadata": {
      "customData": "custom value"
    },
    "status": "sent",
    "values": [
      {
        "field": "Full Name",
        "value": "John Doe"
      }
    ],
    "preferences": {
      "send_email": true,
      "send_sms": false
    },
    "role": "First Party",
    "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
  }
]
```

