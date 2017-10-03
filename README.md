# jslib
[![npm](https://img.shields.io/npm/v/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![license](https://img.shields.io/npm/l/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/Glinkis/jslib/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/Glinkis/jslib/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/Glinkis/jslib/badges/build.png?b=master)](https://scrutinizer-ci.com/g/Glinkis/jslib/build-status/master)

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
