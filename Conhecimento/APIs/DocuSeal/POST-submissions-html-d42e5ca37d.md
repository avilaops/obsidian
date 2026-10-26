---
title: "Create a submission from HTML Pro"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "POST"
rota: "/submissions/html"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

### Create a submission from HTML Pro

Copy as Markdown

post /submissions/html

This API endpoint allows you to create a one-off submission request document using the provided HTML content, with special field tags rendered as a fillable and signable form.  
**Related Guides**  
[Create PDF document fillable form with HTML](https://www.docuseal.com/guides/create-pdf-document-fillable-form-with-html-api)

Request Body Properties

name String

Name of the document submission.

Example Test Submission Document

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

template\_ids Array

An optional array of template IDs to use in the submission along with the provided documents. This can be used to create multi-document submissions when some of the required documents exist within templates.

documents Array required

The list of documents built from HTML. Can be used to create a submission with multiple documents.

name String

Document name. Random uuid will be assigned when not specified.

Example Test Document

html String required

HTML document content with field tags.

Example \<p>Lorem Ipsum is simply dummy text of the \<text-field name="Industry" role="First Party" required="false" style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px"> \</text-field> and typesetting industry\</p>

html\_header String

HTML document content of the header to be displayed on every page.

HTML document content of the footer to be displayed on every page.

size String

Page size. Letter 8.5 x 11 will be assigned when not specified.

Default Letter

Possible values Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6

Example A4

position Integer

Document position in the submission. If not specified, the document will be added in the order it appears in the documents array.

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

invite\_by String

Set the role name of the previous party that should invite this party via email.

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

message Object

Custom signature request email message.

subject String

Custom signature request email subject.

body String

Custom signature request email body. Can include variables such as {{template.name}}, {{submission.name}}, {{submitter.link}}, {{account.name}}.

merge\_documents Boolean

Set `true` to merge the documents into a single PDF file.

Default false

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/html", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test Submission Document",
    documents: [
      {
        name: "Test Document",
        html: \`<p>Lorem Ipsum is simply dummy text of the
<text-field
  name="Industry"
  role="First Party"
  required="false"
  style="width: 80px; height: 16px; display: inline-block; margin-bottom: -4px">
</text-field>
and typesetting industry</p>
\`
      }
    ],
    submitters: [
      {
        role: "First Party",
        email: "john.doe@example.com"
      }
    ]
  })
});

const submission = await resp.json();
```
```
{
  "id": 5,
  "name": "Test Submission",
  "submitters": [
    {
      "id": 1,
      "uuid": "884d545b-3396-49f1-8c07-05b8b2a78755",
      "email": "john.doe@example.com",
      "slug": "pAMimKcyrLjqVt",
      "sent_at": "2025-06-02T15:55:51.310Z",
      "opened_at": null,
      "completed_at": null,
      "declined_at": null,
      "created_at": "2025-06-02T15:55:50.320Z",
      "updated_at": "2025-06-02T15:55:50.320Z",
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
        "send_sms": false,
        "reply_to": "reply@example.com",
        "completed_redirect_url": "https://example.com/"
      },
      "role": "First Party",
      "embed_src": "https://docuseal.com/s/pAMimKcyrLjqVt"
    }
  ],
  "source": "api",
  "submitters_order": "preserved",
  "status": "pending",
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
  "expire_at": null,
  "created_at": "2025-06-02T15:55:50.270Z"
}
```

