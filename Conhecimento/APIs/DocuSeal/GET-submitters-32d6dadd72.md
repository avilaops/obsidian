---
title: "List all submitters"
servico: "DocuSeal"
tipo: "endpoint"
metodo: "GET"
rota: "/submitters"
source: "https://www.docuseal.com/docs/api"
tags: [api, endpoint]
---

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

