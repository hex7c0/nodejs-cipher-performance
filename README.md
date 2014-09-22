# nodejs-cipher-performance

Benchmarks for nodejs `crypto.getCiphers()` or just a wrapper for cipher function

## Installation

Install through NPM

```bash
npm install nodejs-cipher-performance
```
or
```bash
git clone git://github.com/hex7c0/nodejs-cipher-performance.git
```

## API

inside nodejs project
```js
var cipher = require('nodejs-cipher-performance');

cipher('foo', 'aes128', 'ciao', 'base64');
```

### nodejs-cipher-performance(raw,cipher,encoding)

#### options

 - `raw` - **String | Buffer** Your Data *(default "required")*
 - `cipher`- **String** Type of Hash *(default "required")*
 - `password` - **String | Buffer** Your Password *(default "required")*
 - `encoding`- **String** Type of Encoding *(default "required")*

### [License GPLv3](http://opensource.org/licenses/GPL-3.0)

## Benchmark

Look at [Travis](https://travis-ci.org/hex7c0/nodejs-cipher-performance/) for latest run

```bash
$ npm run-script test

```