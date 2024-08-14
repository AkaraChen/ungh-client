# UNGH-client

An unofficial client for the UNGH API, statically typed and easy to use.

Since the [UNGH official client](https://github.com/unjs/ungh/issues/4) is not published yet, I decided to create this client to help me with my projects.

## Installation

```bash
npm install ungh-client
```

## Usage

```ts
import { client } from 'ungh-client';

const res = await client.GET('/repos/{owner}/{name}', {
    params: {
        path: {
            owner: 'ungh',
            name: 'pathe',
        },
    },
});

console.log(`The awesome repo have ${res.data?.repo?.stars} stars!`);
```

Powered by [openapi-ts](https://openapi-ts.dev/), so this client is type-safe.
