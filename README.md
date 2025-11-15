# split-country-code

Easily split phone numbers into country code and local number.

## Installation

```bash
npm install split-country-code --save
```

## Usage

```javascript
const splitter = require('split-country-code');

console.log(splitter.getNumber('+160987654329'));
// Output: { code: '+1', number: '60987654329' }

console.log(splitter.getNumber('918123456789'));
// Output: { code: '+91', number: '8123456789' }

console.log(splitter.getNumber('+44-1624-123456'));
// Output: { code: '+44-1624', number: '123456' }
```

## Features

* Supports multiple country codes including custom ones.
* Automatically cleans spaces and dashes from numbers.
* Throws an error if a country code is not found.
* Simple, lightweight, and ready for Node.js.

## Contributing

Feel free to contribute by adding more country codes or improving the parsing logic.

## License

MIT
