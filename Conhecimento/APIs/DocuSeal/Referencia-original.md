---
title: "API Reference | DocuSeal Docs"
source: "https://www.docuseal.com/docs/api"
author:
published:
created: 2026-10-26
description: "Complete reference documentation for the DocuSeal API."
tags:
  - "clippings"
---
Explore our API

You can discover our API with Postman and OpenAPI or code with AI.

Choose your language

```node_fetch
curl https://api.docuseal.com/templates -H 'X-Auth-Token: API_KEY'
```

## Submissions

Signature requests can be initiated with Submissions API. Submissions can contain one submitter if signed by a single party or multiple submitters if the document template form contains signatures and fields to be collected and filled by multiple parties. Initiate new submissions to request signatures for specified submitters via email or phone number.

Endpoints

[get /submissions](#list-all-submissions) [get /submissions/{id}](#get-a-submission) [get /submissions/{id}/documents](#get-submission-documents) [post /submissions](#create-a-submission) [post /submissions/pdf](#create-a-submission-from-pdf) [post /submissions/docx](#create-a-submission-from-docx) [post /submissions/html](#create-a-submission-from-html) [put /submissions/{id}](#update-a-submission) [delete /submissions/{id}](#archive-a-submission)

### List all submissions

Copy as Markdown

get /submissions

The API endpoint provides the ability to retrieve a list of available submissions.

Parameters

template\_id Integer

The template ID allows you to receive only the submissions created from that specific template.

status String

Filter submissions by status.

Possible values completed, declined, expired, pending

q String

Filter submissions based on submitter's name, email or phone partial match.

slug String

Filter submissions by unique slug.

Example NtLDQM7eJX2ZMd

template\_folder String

Filter submissions by template folder name.

archived Boolean

Returns only archived submissions when `true` and only active submissions when `false`.

limit Integer

The number of submissions to return. Default value is 10. Maximum value is 100.

after Integer

The unique identifier of the submission to start the list from. It allows you to receive only submissions with an ID greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of submissions.

before Integer

The unique identifier of the submission that marks the end of the list. It allows you to receive only submissions with an ID less than the specified value.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const { data, pagination } = await resp.json();
```
```
{
  "data": [
    {
      "id": 1,
      "name": null,
      "source": "link",
      "submitters_order": "random",
      "slug": "VyL4szTwYoSvXq",
      "status": "completed",
      "audit_log_url": "https://docuseal.com/file/hash/example.pdf",
      "combined_document_url": null,
      "expire_at": null,
      "variables": {},
      "completed_at": "2023-12-10T15:49:21.895Z",
      "created_at": "2023-12-10T15:48:17.166Z",
      "updated_at": "2023-12-10T15:49:21.895Z",
      "archived_at": null,
      "submitters": [
        {
          "id": 1,
          "submission_id": 1,
          "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
          "email": "submitter@example.com",
          "slug": "dsEeWrhRD8yDXT",
          "sent_at": "2023-12-14T15:45:49.011Z",
          "opened_at": "2023-12-14T15:48:23.011Z",
          "completed_at": "2023-12-14T15:49:21.701Z",
          "declined_at": null,
          "created_at": "2023-12-10T15:48:17.173Z",
          "updated_at": "2023-12-14T15:50:21.799Z",
          "name": "John Doe",
          "phone": "+1234567890",
          "status": "completed",
          "role": "First Party",
          "metadata": {},
          "preferences": {}
        }
      ],
      "template": {
        "id": 1,
        "name": "Example Template",
        "external_id": "Temp123",
        "folder_name": "Default",
        "created_at": "2023-12-14T15:50:21.799Z",
        "updated_at": "2023-12-14T15:50:21.799Z"
      },
      "created_by_user": {
        "id": 1,
        "first_name": "Bob",
        "last_name": "Smith",
        "email": "bob.smith@example.com"
      }
    }
  ],
  "pagination": {
    "count": 1,
    "next": 1,
    "prev": 1
  }
}
```

### Get a submission

Copy as Markdown

get /submissions/{id}

The API endpoint provides the functionality to retrieve information about a submission.

Parameters

id Integer required

The unique identifier of the submission.

Example 1001

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/1001", {
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
  "name": null,
  "source": "link",
  "submitters_order": "random",
  "slug": "VyL4szTwYoSvXq",
  "audit_log_url": "https://docuseal.com/blobs/proxy/hash/example.pdf",
  "combined_document_url": null,
  "completed_at": "2023-12-14T15:49:21.701Z",
  "expire_at": null,
  "variables": {},
  "created_at": "2023-12-10T15:48:17.166Z",
  "updated_at": "2023-12-10T15:49:21.895Z",
  "archived_at": null,
  "submitters": [
    {
      "id": 1,
      "submission_id": 1,
      "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
      "email": "submitter@example.com",
      "slug": "dsEeWrhRD8yDXT",
      "sent_at": "2023-12-14T15:45:49.011Z",
      "opened_at": "2023-12-14T15:48:23.011Z",
      "completed_at": "2023-12-14T15:49:21.701Z",
      "declined_at": null,
      "created_at": "2023-12-14T15:48:17.173Z",
      "updated_at": "2023-12-14T15:50:21.799Z",
      "name": "John Doe",
      "phone": "+1234567890",
      "external_id": null,
      "status": "completed",
      "metadata": {},
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "documents": [
        {
          "name": "example",
          "url": "https://docuseal.com/blobs/proxy/hash/example.pdf"
        }
      ],
      "role": "First Party"
    }
  ],
  "template": {
    "id": 1,
    "name": "Example Template",
    "external_id": "Temp123",
    "folder_name": "Default",
    "created_at": "2023-12-14T15:50:21.799Z",
    "updated_at": "2023-12-14T15:50:21.799Z"
  },
  "created_by_user": {
    "id": 1,
    "first_name": "Bob",
    "last_name": "Smith",
    "email": "bob.smith@example.com"
  },
  "submission_events": [
    {
      "id": 1,
      "submitter_id": 2,
      "event_type": "view_form",
      "event_timestamp": "2023-12-14T15:47:24.566Z",
      "data": {}
    }
  ],
  "documents": [
    {
      "name": "example",
      "url": "https://docuseal.com/file/hash/example.pdf"
    }
  ],
  "status": "completed"
}
```

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

### Create a submission from PDF Pro

Copy as Markdown

post /submissions/pdf

The API endpoint provides the functionality to create one-off submission request from a PDF. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.pdf](https://www.docuseal.com/examples/fieldtags.pdf) for more text tag formats. Or specify the exact pixel coordinates of the document fields using \`fields\` param.  
**Related Guides**  
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)

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

An array of PDF documents to create a submission.

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

flatten Boolean

Remove PDF form fields from the documents.

Default false

merge\_documents Boolean

Set `true` to merge the documents into a single PDF file.

Default false

Pass `false` to disable the removal of {{text}} tags from the PDF. This can be used along with transparent text tags for faster and more robust PDF processing.

Default true

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/pdf", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test Submission Document",
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

### Create a submission from DOCX Pro

Copy as Markdown

post /submissions/docx

The API endpoint provides functionality to create a one-off submission request from a DOCX file with dynamic content variables. Use `[[variable_name]]` text tags to define dynamic content variables in the document. See [https://www.docuseal.com/examples/demo\_template.docx](https://www.docuseal.com/examples/demo_template.docx) for the specific text variable syntax, including dynamic content tables and lists. You can also use the `{{signature}}` field syntax to define fillable fields, as in a PDF.  
**Related Guides**  
[Use dynamic content variables in DOCX to create personalized documents](https://www.docuseal.com/guides/use-dynamic-content-variables-in-docx-to-create-personalized-documents)

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

variables Object

Dynamic content variables object. Variable values can be strings, numbers, arrays, objects, or HTML content used to generate styled text, paragraphs, and tables in DOCX.

Example {"variable\_name":"value"}

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

An array of DOCX documents to create a submission.

name String required

Name of the document.

file String required

Base64-encoded content of the PDF or DOCX file or downloadable file URL.

Example base64

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

Pass `false` to disable the removal of {{text}} tags from the document. This can be used along with transparent text tags for faster and more robust document processing.

Default true

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/docx", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test Submission Document",
    variables: {
      variable_name: "value"
    },
    documents: [
      {
        name: "string",
        file: "base64"
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

const submitters = await resp.json();
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

### Update a submission

Copy as Markdown

put /submissions/{id}

The API endpoint allows you to update a submission: change its name, expiration date, and archive or unarchive it.

Parameters

id Integer required

The unique identifier of the submission.

Example 1001

Request Body Properties

name String

The name of the submission.

Example New Submission Name

expire\_at String

The date and time when the submission will expire and no longer be available. Pass `null` to remove the expiration.

Example 2024-09-01 12:00:00 UTC

archived Boolean

Set `true` to archive the submission or `false` to unarchive it.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submissions/1001", {
  method: "PUT",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "New Submission Name",
    expire_at: "2024-09-01 12:00:00 UTC",
    archived: true
  })
});

const submission = await resp.json();
```
```
{
  "id": 1,
  "name": null,
  "source": "link",
  "submitters_order": "random",
  "slug": "VyL4szTwYoSvXq",
  "audit_log_url": "https://docuseal.com/blobs/proxy/hash/example.pdf",
  "combined_document_url": null,
  "completed_at": "2023-12-14T15:49:21.701Z",
  "expire_at": null,
  "variables": {},
  "created_at": "2023-12-10T15:48:17.166Z",
  "updated_at": "2023-12-10T15:49:21.895Z",
  "archived_at": null,
  "submitters": [
    {
      "id": 1,
      "submission_id": 1,
      "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
      "email": "submitter@example.com",
      "slug": "dsEeWrhRD8yDXT",
      "sent_at": "2023-12-14T15:45:49.011Z",
      "opened_at": "2023-12-14T15:48:23.011Z",
      "completed_at": "2023-12-14T15:49:21.701Z",
      "declined_at": null,
      "created_at": "2023-12-14T15:48:17.173Z",
      "updated_at": "2023-12-14T15:50:21.799Z",
      "name": "John Doe",
      "phone": "+1234567890",
      "external_id": null,
      "status": "completed",
      "metadata": {},
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "documents": [
        {
          "name": "example",
          "url": "https://docuseal.com/blobs/proxy/hash/example.pdf"
        }
      ],
      "role": "First Party"
    }
  ],
  "template": {
    "id": 1,
    "name": "Example Template",
    "external_id": "Temp123",
    "folder_name": "Default",
    "created_at": "2023-12-14T15:50:21.799Z",
    "updated_at": "2023-12-14T15:50:21.799Z"
  },
  "created_by_user": {
    "id": 1,
    "first_name": "Bob",
    "last_name": "Smith",
    "email": "bob.smith@example.com"
  },
  "documents": [
    {
      "name": "example",
      "url": "https://docuseal.com/file/hash/example.pdf"
    }
  ],
  "status": "completed"
}
```

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

## Submitters

Submitters API allows you to load all details provided by the signer of the document.

Endpoints

[get /submitters](#list-all-submitters) [get /submitters/{id}](#get-a-submitter) [put /submitters/{id}](#update-a-submitter)

### List all submitters

Copy as Markdown

get /submitters

The API endpoint provides the ability to retrieve a list of submitters.

Parameters

submission\_id Integer

The submission ID allows you to receive only the submitters related to that specific submission.

q String

Filter submitters on name, email or phone partial match.

slug String

Filter submitters by unique slug.

Example zAyL9fH36Havvm

completed\_after String

The date and time string value to filter submitters that completed the submission after the specified date and time.

Example 2024-03-05 9:32:20

completed\_before String

The date and time string value to filter submitters that completed the submission before the specified date and time.

Example 2024-03-06 19:32:20

external\_id String

The unique application-specific identifier provided for a submitter when initializing a signature request. It allows you to receive only submitters with a specified external ID.

limit Integer

The number of submitters to return. Default value is 10. Maximum value is 100.

after Integer

The unique identifier of the submitter to start the list from. It allows you to receive only submitters with an ID greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of submitters.

before Integer

The unique identifier of the submitter to end the list with. It allows you to receive only submitters with an ID less than the specified value.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submitters", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const { data, pagination } = await resp.json();
```
```
{
  "data": [
    {
      "id": 7,
      "submission_id": 3,
      "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
      "email": "submitter@example.com",
      "slug": "dsEeWrhRD8yDXT",
      "sent_at": "2023-12-14T15:45:49.011Z",
      "opened_at": "2023-12-14T15:48:23.011Z",
      "completed_at": "2023-12-14T15:49:21.701Z",
      "declined_at": null,
      "created_at": "2023-12-14T15:48:17.173Z",
      "updated_at": "2023-12-14T15:50:21.799Z",
      "name": "John Doe",
      "phone": "+1234567890",
      "status": "completed",
      "external_id": null,
      "preferences": {},
      "metadata": {},
      "template": {
        "id": 2,
        "name": "Example Template",
        "created_at": "2023-12-14T15:50:21.799Z",
        "updated_at": "2023-12-14T15:50:21.799Z"
      },
      "submission_events": [
        {
          "id": 12,
          "submitter_id": 7,
          "event_type": "view_form",
          "event_timestamp": "2023-12-14T15:48:17.351Z",
          "data": {}
        }
      ],
      "values": [
        {
          "field": "Full Name",
          "value": "John Doe"
        }
      ],
      "documents": [
        {
          "name": "sample-document",
          "url": "https://docuseal.com/file/eyJfcmFpbHMiOnsiIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f9758362acced0f3c86cdffad02800e/sample-document.pdf"
        }
      ],
      "role": "First Party"
    }
  ],
  "pagination": {
    "count": 1,
    "next": 1,
    "prev": 1
  }
}
```

### Get a submitter

Copy as Markdown

get /submitters/{id}

The API endpoint provides functionality to retrieve information about a submitter, along with the submitter documents and field values.

Parameters

id Integer required

The unique identifier of the submitter.

Example 500001

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/submitters/500001", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const submitter = await resp.json();
```
```
{
  "id": 7,
  "submission_id": 3,
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
  "template": {
    "id": 2,
    "name": "Example Template",
    "created_at": "2023-12-14T15:50:21.799Z",
    "updated_at": "2023-12-14T15:50:21.799Z"
  },
  "submission_events": [
    {
      "id": 12,
      "submitter_id": 7,
      "event_type": "view_form",
      "event_timestamp": "2023-12-14T15:47:17.351Z",
      "data": {}
    }
  ],
  "values": [
    {
      "field": "Full Name",
      "value": "John Doe"
    }
  ],
  "documents": [
    {
      "name": "sample-document",
      "url": "https://docuseal.com/file/hash/sample-document.pdf"
    }
  ],
  "role": "First Party"
}
```

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

## Templates

Templates represent reusable document signing forms with fields and signatures to be collected. It's possible to create unique template forms with fields and signatures using HTML or with tagged PDFs.

Endpoints

[get /templates](#list-all-templates) [get /templates/{id}](#get-a-template) [post /templates/pdf](#create-a-template-from-pdf) [post /templates/docx](#create-a-template-from-docx) [post /templates/html](#create-a-template-from-html) [post /templates/{id}/clone](#clone-a-template) [post /templates/merge](#merge-templates) [put /templates/{id}](#update-a-template) [put /templates/{id}/documents](#update-template-documents) [delete /templates/{id}](#archive-a-template)

### List all templates

Copy as Markdown

get /templates

The API endpoint provides the ability to retrieve a list of available document templates.

Parameters

q String

Filter templates based on the name partial match.

slug String

Filter templates by unique slug.

Example opaKWh8WWTAcVG

external\_id String

The unique application-specific identifier provided for the template via API or Embedded template form builder. It allows you to receive only templates with your specified external ID.

folder String

Filter templates by folder name.

archived Boolean

List only archived templates instead of active ones.

shared Boolean

List templates shared with test mode.

limit Integer

The number of templates to return. Default value is 10. Maximum value is 100.

after Integer

The unique identifier of the template to start the list from. It allows you to receive only templates with an ID greater than the specified value. Pass ID value from the `pagination.next` response to load the next batch of templates.

before Integer

The unique identifier of the template to end the list with. It allows you to receive only templates with an ID less than the specified value.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const { data, pagination } = await resp.json();
```
```
{
  "data": [
    {
      "id": 1,
      "slug": "iRgjDX7WDK6BRo",
      "name": "Example Template",
      "preferences": {},
      "schema": [
        {
          "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
          "name": "example-document"
        }
      ],
      "fields": [
        {
          "uuid": "594bdf04-d941-4ca6-aa73-93e61d625c02",
          "submitter_uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
          "name": "Full Name",
          "type": "text",
          "required": true,
          "preferences": {},
          "areas": [
            {
              "x": 0.2638888888888889,
              "y": 0.168958742632613,
              "w": 0.325,
              "h": 0.04616895874263263,
              "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
              "page": 0
            }
          ]
        }
      ],
      "submitters": [
        {
          "name": "First Party",
          "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0"
        }
      ],
      "author_id": 1,
      "archived_at": null,
      "created_at": "2023-12-14T15:21:57.375Z",
      "updated_at": "2023-12-14T15:22:55.094Z",
      "source": "native",
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
          "id": 5,
          "uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
          "url": "https://docuseal.com/file/hash/sample-document.pdf",
          "preview_image_url": "https://docuseal.com/file/hash/0.jpg",
          "filename": "example-document.pdf"
        }
      ]
    }
  ],
  "pagination": {
    "count": 1,
    "next": 1,
    "prev": 2
  }
}
```

### Get a template

Copy as Markdown

get /templates/{id}

The API endpoint provides the functionality to retrieve information about a document template.

Parameters

id Integer required

The unique identifier of the document template.

Example 1000001

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001", {
  method: "GET",
  headers: {
    "X-Auth-Token": "API_KEY"
  }
});

const template = await resp.json();
```
```
{
  "id": 1,
  "slug": "iRgjDX7WDK6BRo",
  "name": "Example Template",
  "preferences": {},
  "schema": [
    {
      "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
      "name": "example-document"
    }
  ],
  "fields": [
    {
      "uuid": "594bdf04-d941-4ca6-aa73-93e61d625c02",
      "submitter_uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0",
      "name": "Full Name",
      "type": "text",
      "required": true,
      "preferences": {},
      "areas": [
        {
          "x": 0.2638888888888889,
          "y": 0.168958742632613,
          "w": 0.325,
          "h": 0.04616895874263263,
          "attachment_uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
          "page": 0
        }
      ]
    }
  ],
  "submitters": [
    {
      "name": "First Party",
      "uuid": "0954d146-db8c-4772-aafe-2effc7c0e0c0"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:21:57.375Z",
  "updated_at": "2023-12-14T15:22:55.094Z",
  "source": "native",
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
      "id": 5,
      "uuid": "d94e615f-76e3-46d5-8f98-36bdacb8664a",
      "url": "https://docuseal.com/file/hash/sample-document.pdf",
      "preview_image_url": "https://docuseal.com/file/hash/0.jpg",
      "filename": "example-document.pdf"
    }
  ]
}
```

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

### Create a template from DOCX Pro

Copy as Markdown

post /templates/docx

The API endpoint provides the functionality to create a fillable document template for an existing Microsoft Word document. Use `{{Field Name;role=Signer1;type=date}}` text tags to define fillable fields in the document. See [https://www.docuseal.com/examples/fieldtags.docx](https://www.docuseal.com/examples/fieldtags.docx) for more text tag formats. Or specify the exact pixel coordinates of the document fields using \`fields\` param.  
**Related Guides**  
[Use embedded text field tags to create a fillable form](https://www.docuseal.com/guides/use-embedded-text-field-tags-in-the-pdf-to-create-a-fillable-form)

Request Body Properties

name String

Name of the template.

Example Test DOCX

external\_id String

Your application-specific unique string key to identify this template within your app. Existing template with specified `external_id` will be updated with a new document.

Example unique-key

folder\_name String

The folder's name in which the template should be created.

shared\_link Boolean

Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default true

documents Array required

An array of DOCX documents to create a template.

name String required

Name of the document.

file String required

Base64-encoded content of the DOCX file or downloadable file URL.

Example base64

dynamic Boolean

Set to `true` to make the document dynamic. When enabled, the DOCX document content can be edited or use \[\[variables\]\] in the template editor.

Default false

fields Array

Fields are optional if you use {{...}} text tags to define fields in the document.

name String

Name of the field.

type String

Type of the field (e.g., text, signature, date, initials).

Possible values heading, text, signature, initials, date, number, image, checkbox, multiple, file, radio, select, cells, stamp, payment, phone, verification, kba, strikethrough

role String

Role name of the signer.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/docx", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Test DOCX",
    documents: [
      {
        name: "string",
        file: "base64"
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
      "url": "https://docuseal.com/hash/DemoPDF.pdf"
    }
  ]
}
```

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

### Clone a template

Copy as Markdown

post /templates/{id}/clone

The API endpoint allows you to clone an existing template into a new template.

Parameters

id Integer required

The unique identifier of the document template.

Example 1000001

Request Body Properties

name String

Template name. Existing name with (Clone) suffix will be used if not specified.

Example Cloned Template

folder\_name String

The folder's name to which the template should be cloned.

external\_id String

Your application-specific unique string key to identify this template within your app.

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/1000001/clone", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    name: "Cloned Template"
  })
});

const template = await resp.json();
```
```
{
  "id": 6,
  "slug": "Xc7opTqwwV9P7x",
  "name": "Cloned Template",
  "schema": [
    {
      "attachment_uuid": "68aa0716-61f0-4535-9ba4-6c00f835b080",
      "name": "sample-document"
    }
  ],
  "fields": [
    {
      "uuid": "93c7065b-1b19-4551-b67b-9946bf1c11c9",
      "submitter_uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5",
      "name": "Name",
      "type": "text",
      "required": true,
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
      "name": "First Party",
      "uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 2,
  "folder_name": "Default",
  "external_id": null,
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 9,
      "uuid": "ded62277-9705-4fac-b5dc-58325d4102eb",
      "url": "https://docuseal.com/file/hash/sample-document.pdf",
      "filename": "sample-document.pdf"
    }
  ]
}
```

### Merge templates Pro

Copy as Markdown

post /templates/merge

The API endpoint allows you to merge multiple templates with documents and fields into a new combined template.

Request Body Properties

template\_ids Array required

An array of template ids to merge into a new template.

Example \[321,432\]

name String

Template name. Existing name with (Merged) suffix will be used if not specified.

Example Merged Template

folder\_name String

The name of the folder in which the merged template should be placed.

external\_id String

Your application-specific unique string key to identify this template within your app.

shared\_link Boolean

Set to `true` to make the template available via a shared link. This will allow anyone with the link to create a submission from this template.

Default true

roles Array

An array of submitter role names to be used in the merged template.

Example \["Agent","Customer"\]

```node_fetch
const fetch = require("node-fetch");

const resp = await fetch("https://api.docuseal.com/templates/merge", {
  method: "POST",
  headers: {
    "X-Auth-Token": "API_KEY"
  },
  body: JSON.stringify({
    template_ids: [
      321,
      432
    ],
    name: "Merged Template"
  })
});

const template = await resp.json();
```
```
{
  "id": 6,
  "slug": "Xc7opTqwwV9P7x",
  "name": "Merged Template",
  "schema": [
    {
      "attachment_uuid": "68aa0716-61f0-4535-9ba4-6c00f835b080",
      "name": "sample-document"
    }
  ],
  "fields": [
    {
      "uuid": "93c7065b-1b19-4551-b67b-9946bf1c11c9",
      "submitter_uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5",
      "name": "Name",
      "type": "text",
      "required": true,
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
      "name": "First Party",
      "uuid": "ad128012-756d-4d17-b728-6f6b1d482bb5"
    }
  ],
  "author_id": 1,
  "archived_at": null,
  "created_at": "2023-12-14T15:50:21.799Z",
  "updated_at": "2023-12-14T15:50:21.799Z",
  "source": "api",
  "folder_id": 2,
  "folder_name": "Default",
  "external_id": null,
  "shared_link": true,
  "author": {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com"
  },
  "documents": [
    {
      "id": 9,
      "uuid": "ded62277-9705-4fac-b5dc-58325d4102eb",
      "url": "https://docuseal.com/file/hash/sample-document.pdf",
      "filename": "sample-document.pdf"
    }
  ]
}
```

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

## Webhooks

Send document signing events to a preconfigured webhook URL. You can use this feature to capture and process document-related events in real-time.

[Set webhook URL](https://console.docuseal.com/webhooks)

### Form Webhook

Copy as Markdown

During the form filling and signing process, 4 types of events may occur and are dispatched at different stages:
- **'form.viewed'** event is triggered each time the submitter opens the form.
- **'form.started'** event is triggered when the submitter initiates filling out the form.
- **'form.completed'** event is triggered upon successful form completion and signing by one of the parties.
- **'form.declined'** event is triggered when a signer declines the submission.
It's important to note that each of these events contain information available at the time of dispatch, so some data may be missing or incomplete depending on the specific event. Failed webhook requests (4xx, 5xx) are automatically retried multiple times within 48 hours (every 2^attempt minutes) for all production accounts.  
**Related Guides**  
[Download Signed Documents](https://www.docuseal.com/guides/download-signed-documents)

Payload

event\_type String

The event type.

Possible values form.viewed, form.started, form.completed, form.declined

The event timestamp.

Example 2023-09-24T11:20:42Z

data Object

Submitted form data object.

id Integer

The submitter's unique identifier.

submission\_id Integer

The unique submission identifier.

email String

The submitter's email address.

Example john.doe@example.com

phone String

The submitter's phone number, formatted according to the E.164 standard.

Example +1234567890

name String

The submitter's name.

ua String

The user agent string that provides information about the submitter's web browser.

ip String

The submitter's IP address.

sent\_at String

The date and time when the signing request was sent to the submitter.

opened\_at String

The date and time when the submitter opened the signing form.

completed\_at String

The date and time when the submitter completed the signing form.

declined\_at String

The date and time when the submitter declined the signing form.

decline\_reason String

The reason provided by the submitter for declining the signing form.

created\_at String

The date and time when the submitter was created.

updated\_at String

The date and time when the submitter was last updated.

external\_id String

Your application-specific unique string key to identify the submitter.

status String

Possible values completed, declined, opened, sent, awaiting

role String

The role name of the submitter.

Metadata object with additional submitter information.

preferences Object

Submitter preferences.

values Array

An array of the filled values submitted by the submitter.

field String

Document template field name.

value String | Integer | Number | Boolean | Array

Pre-filled value of the field.

documents Array

An array of the completed documents.

name String

Document name.

url String

Document URL.

audit\_log\_url String

Audit log file URL.

submission\_url String

The submission URL.

template Object

id Integer

Unique identifier of the document template.

name String

The name of the template.

external\_id String

Your application-specific unique string key to identify this template within your app.

folder\_name String

Folder name where the template is located.

created\_at String

The date and time when the template was created.

updated\_at String

The date and time when the template was last updated.

submission Object

Submission details of the form.

id Integer

The submission unique identifier.

audit\_log\_url String

Audit log file URL.

combined\_document\_url String

Combined PDF file URL with documents and Audit Log.

status String

Possible values completed, declined, expired, pending

url String

The submission URL.

variables Object

Dynamic document content variables of the submission.

created\_at String

The date and time when the submission was created.

```
{
  "event_type": "form.completed",
  "timestamp": "2023-09-24T13:48:36Z",
  "data": {
    "id": 1,
    "email": "john.doe@example.com",
    "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    "ip": "132.216.88.83",
    "sent_at": "2023-08-20T10:09:05.459Z",
    "opened_at": "2023-08-20T10:10:00.451Z",
    "completed_at": "2023-08-20T10:12:47.579Z",
    "declined_at": null,
    "created_at": "2023-08-20T10:09:02.459Z",
    "updated_at": "2023-08-20T10:12:47.907Z",
    "name": null,
    "phone": null,
    "role": "First Party",
    "external_id": null,
    "decline_reason": null,
    "status": "completed",
    "preferences": {
      "send_email": true,
      "send_sms": false
    },
    "submission": {
      "id": 12,
      "audit_log_url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/audit-log.pdf",
      "combined_document_url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/document.pdf",
      "status": "completed",
      "url": "https://docuseal.com/e/N5JsdkFGPeQF7J",
      "variables": {
        "custom_variable": "value"
      },
      "created_at": "2023-08-20T10:09:05.258Z"
    },
    "template": {
      "id": 6,
      "name": "Invoice",
      "external_id": null,
      "created_at": "2023-08-19T11:09:21.487Z",
      "updated_at": "2023-08-19T11:11:47.804Z",
      "folder_name": "Default"
    },
    "values": [
      {
        "field": "First Name",
        "value": "John"
      },
      {
        "field": "Last Name",
        "value": "Doe"
      },
      {
        "field": "Signature",
        "value": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/signature.png"
      },
      {
        "field": "Signature",
        "value": "John Doe"
      }
    ],
    "metadata": {
      "customData": "custom value"
    },
    "audit_log_url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/audit-log.pdf",
    "submission_url": "https://docuseal.com/e/N5JsdkFGPeQF7J",
    "documents": [
      {
        "name": "sample-document",
        "url": "https://docuseal.com/blobs/proxy/eyJfcmFpbHMiOnsib/sample-document.pdf"
      }
    ]
  }
}
```

### Submission Webhook

Copy as Markdown

Get submission creation, completion, expiration, and archiving notifications using these events:
- **'submission.created'** event is triggered when the submission is created.
- **'submission.completed'** event is triggered when the submission is completed by all signing parties.
- **'submission.expired'** event is triggered when the submission expires.
- **'submission.archived'** event is triggered when the submission is archived.

Payload

event\_type String

The event type.

Possible values submission.created, submission.completed, submission.expired, submission.archived

The event timestamp.

Example 2023-09-24T11:20:42Z

data Object

id Integer

Submission unique ID number.

name String

Name of the document submission.

Example Test Submission Document

slug String

Unique slug of the submission.

source String

The source of the submission.

Possible values invite, bulk, api, embed, mcp, link, self

submitters\_order String

The order of submitters.

Possible values random, preserved

audit\_log\_url String

Audit log file URL.

combined\_document\_url String

Combined PDF file URL with documents and Audit Log.

created\_at String

The date and time when the submission was created.

updated\_at String

The date and time when the submission was last updated.

archived\_at String

The date and time when the submission was archived.

expire\_at String

The date and time when the submission will expire and no longer be available for signing.

variables Object

Dynamic content variables object used in dynamic template documents.

submitters Array

The list of submitters.

id Integer

Submitter unique ID number.

submission\_id Integer

Submission unique ID number.

uuid String

Submitter UUID.

email String

The email address of the submitter.

slug String

Unique key to be used in the form signing link and embedded form.

sent\_at String

The date and time when the signing request was sent to the submitter.

opened\_at String

The date and time when the submitter opened the signing form.

completed\_at String

The date and time when the submitter completed the signing form.

declined\_at String

The date and time when the submitter declined the signing form.

created\_at String

The date and time when the submitter was created.

updated\_at String

The date and time when the submitter was last updated.

name String

The name of the submitter.

phone String

The phone number of the submitter.

external\_id String

Your application-specific unique string key to identify this submitter within your app.

status String

The status of signing request for the submitter.

Possible values completed, declined, opened, sent, awaiting

values Array

An array of pre-filled values for the submitter.

field String

Document template field name.

value String | Integer | Number | Boolean | Array

Pre-filled value of the field.

documents Array

An array of completed or signed documents by the submitter.

name String

Document name.

url String

Document URL.

role String

The role of the submitter in the signing process.

Metadata object with additional submitter information.

preferences Object

Submitter preferences.

template Object

id Integer

Unique identifier of the document template.

name String

The name of the template.

external\_id String

Your application-specific unique string key to identify this template within your app.

folder\_name String

Folder name where the template is located.

created\_at String

The date and time when the template was created.

updated\_at String

The date and time when the template was last updated.

created\_by\_user Object

submission\_events Array

An array of events related to the submission.

id Integer

Submission event unique ID number.

submitter\_id Integer

Unique identifier of the submitter that triggered the event.

event\_type String

Event type.

Possible values send\_email, bounce\_email, complaint\_email, send\_reminder\_email, send\_sms, send\_2fa\_sms, open\_email, click\_email, click\_sms, phone\_verified, start\_form, start\_verification, complete\_verification, view\_form, invite\_party, complete\_form, decline\_form, api\_complete\_form

Date and time when the event was triggered.

data Object

Additional event details object.

documents Array

An array of completed or signed documents of the submission.

name String

Document name.

url String

Document URL.

status String

The status of the submission.

Possible values completed, declined, expired, pending

completed\_at String

The date and time when the submission was completed.

```
{
  "event_type": "submission.created",
  "timestamp": "2024-05-26T17:32:33.518Z",
  "data": {
    "id": 1,
    "name": "Sample Submission",
    "slug": "VyL4szTwYoSvXq",
    "expire_at": null,
    "archived_at": null,
    "created_at": "2024-05-26T17:32:33.447Z",
    "updated_at": "2024-05-26T17:32:33.447Z",
    "source": "invite",
    "submitters_order": "random",
    "audit_log_url": null,
    "combined_document_url": null,
    "submitters": [
      {
        "id": 1,
        "submission_id": 1,
        "uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030",
        "email": "mike@example.com",
        "slug": "S6fWFYRZus6suW",
        "sent_at": null,
        "opened_at": null,
        "completed_at": null,
        "declined_at": null,
        "created_at": "2024-05-26T17:32:33.466Z",
        "updated_at": "2024-05-26T17:32:33.466Z",
        "name": null,
        "phone": null,
        "external_id": null,
        "metadata": {},
        "status": "awaiting",
        "values": [],
        "documents": [],
        "preferences": {},
        "role": "First Party"
      }
    ],
    "template": {
      "id": 1,
      "name": "Sample Document",
      "created_at": "2024-05-26T16:57:28.092Z",
      "updated_at": "2024-05-26T16:58:07.314Z",
      "external_id": null,
      "folder_name": "Default"
    },
    "variables": {
      "custom_variable": "value"
    },
    "created_by_user": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com"
    },
    "submission_events": [],
    "documents": [],
    "status": "pending",
    "completed_at": null
  }
}
```

### Template Webhook

Copy as Markdown

Get template creation and update notifications using these events:
- **'template.created'** is triggered when the template is created.
- **'template.updated'** is triggered when the template is updated.
- **'template.archived'** is triggered when the template is archived.

Payload

event\_type String

The event type.

Possible values template.created, template.updated, template.archived

The event timestamp.

Example 2023-09-24T11:20:42Z

data Object

id Integer

Unique identifier of the document template.

slug String

Unique slug of the document template.

name String

The name of the template.

preferences Object

Template preferences.

schema Array

List of documents attached to the template.

attachment\_uuid String

Unique identifier of the attached document.

name String

Name of the attached document.

fields Array

List of fields to be filled in the template.

uuid String

Unique identifier of the field.

submitter\_uuid String

Unique identifier of the submitter that filled the field.

name String

Field name.

variables\_schema Object

Schema of the dynamic document content variables used in the template.

submitters Array

The list of submitters for the template.

name String

The name of the submitter.

uuid String

Unique identifier of the submitter.

author\_id Integer

Unique identifier of the author of the template.

archived\_at String

Date and time when the template was archived.

created\_at String

The date and time when the template was created.

updated\_at String

The date and time when the template was last updated.

source String

Source of the template.

Possible values native, api, embed, mcp

external\_id String

Your application-specific unique string key to identify this template within your app.

folder\_id Integer

Unique identifier of the folder where the template is located.

folder\_name String

Folder name where the template is located.

shared\_link Boolean

Indicates if the template is accessible by link.

id Integer

Unique identifier of the user.

first\_name String

The first name of the user.

last\_name String

The last name of the user.

email String

The email address of the user.

documents Array

List of documents attached to the template.

id Integer

Unique identifier of the document.

uuid String

Unique identifier of the document.

url String

URL of the document.

preview\_image\_url String

Document preview image URL.

filename String

Document filename.

```
{
  "event_type": "template.created",
  "timestamp": "2024-05-26T16:59:47.237Z",
  "data": {
    "id": 1,
    "slug": "UwRU9ir5dvhSRY",
    "name": "Sample Document",
    "schema": [
      {
        "attachment_uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
        "name": "sample-document"
      }
    ],
    "fields": [
      {
        "uuid": "f86dbf07-2d84-490c-b372-1aaaaf0549c1",
        "submitter_uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030",
        "name": "First Name",
        "type": "text",
        "required": true,
        "preferences": {},
        "areas": [
          {
            "x": 0.2541666666666667,
            "y": 0.2266854052667579,
            "w": 0.3132975260416667,
            "h": 0.04878270348837208,
            "attachment_uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
            "page": 0
          }
        ]
      },
      {
        "uuid": "1b41711b-f765-41c5-b2b9-000b88b96c6e",
        "submitter_uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030",
        "name": "Last Name",
        "type": "text",
        "required": true,
        "preferences": {},
        "areas": [
          {
            "x": 0.5419813368055556,
            "y": 0.3057829599863201,
            "w": 0.2188802083333333,
            "h": 0.05516843365253077,
            "attachment_uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
            "page": 0
          }
        ]
      }
    ],
    "submitters": [
      {
        "name": "First Party",
        "uuid": "6b92a2d0-b511-4678-bccf-1e8a131f5030"
      }
    ],
    "author_id": 1,
    "archived_at": null,
    "created_at": "2024-05-26T16:57:28.092Z",
    "updated_at": "2024-05-26T16:57:28.092Z",
    "source": "native",
    "folder_id": 1,
    "external_id": null,
    "preferences": {},
    "shared_link": false,
    "folder_name": "Default",
    "author": {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com"
    },
    "documents": [
      {
        "id": 12,
        "uuid": "84fa7c01-8b89-47e2-83f0-8623e7e4aa1c",
        "url": "https://docuseal.com/file/hash/sample-document.pdf",
        "preview_image_url": "https://docuseal.com/file/hash/0.jpg",
        "filename": "sample-document.pdf"
      }
    ]
  }
}
```