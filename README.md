# jslib
[![npm](https://img.shields.io/npm/v/jslib-utils.svg)](https://www.npmjs.com/packagejslib-utils)
[![license](https://img.shields.io/npm/l/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)

A modular javascript utility library.

[Documentation](https://glinkis.github.io/jslib/)

## Installation
```bash
npm install jslib-utils --save
```

## Usage
Please observe that this library requires you to be able to use import/export.

The library is structured in such a way that it's possible to import any module separately.
A few examples would be:
```js
import * as jslibUtils from "jslib-utils"
```
```js
import * as math from "jslib-utils/src/math"
```
```js
import { clamp } from "jslib-utils/src/math/clamp"
```
