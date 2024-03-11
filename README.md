# biggames.js

Simple Node.js library for BIG Games public APIs.

_Note: This package isn't finished yet. It fully works, however types have not be completed._

## Install

```
npm install biggames.js
```

## Example

```js
// Import the package.
import { PetSimulator99 } from 'biggames.js';

// Use the PetSimulator99 class to access methods.
const api = new PetSimulator99();

// Fetch information about the CAT clan.
console.log(await api.clan('CAT'));
```
