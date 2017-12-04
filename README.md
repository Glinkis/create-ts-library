# jslib-utils
[![npm](https://img.shields.io/npm/v/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![license](https://img.shields.io/npm/l/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![Build Status](https://travis-ci.org/Glinkis/jslib.svg?branch=master)](https://travis-ci.org/Glinkis/jslib)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e267d9e793eb490e84b232827cbe062b)](https://www.codacy.com/app/Glinkis/jslib?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Glinkis/jslib&amp;utm_campaign=Badge_Grade)

A modular javascript utility library.

[Documentation](https://glinkis.github.io/jslib/)

## Installation
```bash
npm install jslib-utils --save
```

## Usage
The library is built to allow for tree shaking (the emilination of unused code).
```js
import * as jslibUtils from "jslib-utils" // <- imports the whole library, and doesn't allow for tree shaking.
```
```js
import { array, math } from "jslib-utils" // <- imports only the relevant modules, and thus allows for tree shaking.
```

Please feel free to contribute.
