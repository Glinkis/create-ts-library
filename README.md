# jslib-utils

[![npm](https://img.shields.io/npm/v/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![license](https://img.shields.io/npm/l/jslib-utils.svg)](https://www.npmjs.com/package/jslib-utils)
[![Build Status](https://travis-ci.org/Glinkis/jslib.svg?branch=master)](https://travis-ci.org/Glinkis/jslib)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e267d9e793eb490e84b232827cbe062b)](https://www.codacy.com/app/Glinkis/jslib?utm_source=github.com&utm_medium=referral&utm_content=Glinkis/jslib&utm_campaign=Badge_Grade)

A modular javascript utility library.

[Documentation](https://glinkis.github.io/jslib/)

## Installation

```bash
npm install jslib-utils --save
```

## Usage

The library is built to allow for tree shaking (the elimination of unused code).

To access the modules, import through either `jslib-utils/lib`(commonjs modules)
or `jslib-utils/es`(es2015 modules).

There is also a minimized version available through
`jslib-utils/dist/jslib-utils.min` if you prefer that.

```js
// Imports the whole library, and doesn't allow for tree shaking.
import * as jslibUtils from "jslib-utils/dist/jslib-utils.min";
import * as jslibUtils from "jslib-utils/lib";
import * as jslibUtils from "jslib-utils/es";
```

```js
// Imports only the relevant modules, and thus allows for tree shaking.
import { array, math } from "jslib-utils/lib";
import { array, math } from "jslib-utils/es";
```

```js
// Imports can have any level of granularity.
import { easing } from "jslib-utils/lib/animation";
import { linear } from "jslib-utils/lib/animation/easing";
```

Please feel free to contribute.
