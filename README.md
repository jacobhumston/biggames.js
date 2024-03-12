<img src="media/banner.png" alt="banner" width="640" height="360" />

# biggames.js

Simple Node.js library for BIG Games public APIs. Such as the API for Pet Simulator 99.

_Note: Not all type definitions have been completed!_

## Install

```
npm install biggames.js
```

## Documentation

The documentation can be found at https://jacobhumston.github.io/biggames.js/!

## Example

```js
// Import the package.
import { PetSimulator99 } from 'biggames.js';

// Use the PetSimulator99 class to access methods.
const api = new PetSimulator99();

// Fetch information about the CAT clan.
console.log(await api.clan('CAT'));
```
