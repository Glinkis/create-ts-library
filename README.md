# jslib
[![npm](https://img.shields.io/npm/v/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![license](https://img.shields.io/npm/l/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e267d9e793eb490e84b232827cbe062b)](https://www.codacy.com/app/Glinkis/jslib?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Glinkis/jslib&amp;utm_campaign=Badge_Grade)

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

Please feel free to contribute.
