# biggames.js

Simple Node.js library for Big Games public APIs.

_Note: This package isn't finished yet. It fully works, however types have not be completed._

## Install

```
npm install biggames.js
```

## Example

```js
import { PetSimulator99 } from 'biggames.js';

const api = new PetSimulator99();

console.log(await api.clan('CAT'));
```
