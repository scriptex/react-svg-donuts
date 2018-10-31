[![GitHub release](https://img.shields.io/github/release/scriptex/react-svg-donuts.svg)](https://github.com/scriptex/react-svg-donuts/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/react-svg-donuts.svg)](https://github.com/scriptex/react-svg-donuts/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-svg-donuts.svg)](https://github.com/scriptex/react-svg-donuts/commits/master)
[![Build Status](https://travis-ci.org/scriptex/react-svg-donuts.svg?branch=master)](https://travis-ci.org/scriptex/react-svg-donuts)
[![npm](https://img.shields.io/npm/dt/react-svg-donuts.svg)](https://www.npmjs.com/package/react-svg-donuts)
[![npm](https://img.shields.io/npm/v/react-svg-donuts.svg)](https://www.npmjs.com/package/react-svg-donuts)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-svg-donuts/README.md)](https://github.com/scriptex/react-svg-donuts/)
[![Greenkeeper badge](https://badges.greenkeeper.io/scriptex/react-svg-donuts.svg)](https://greenkeeper.io/)

# React SVG Donuts

A ReactJS component for simple SVG donuts.

## Dependencies

1. NodeJS
2. NPM / Yarn
3. React and ReactDOM
4. A ReactJS application

## Usage

First install the package

```shell
$ npm i react-svg-donuts

# or

$ yarn add react-svg-donuts
```

Or [download it](https://github.com/scriptex/react-svg-donuts/archive/master.zip) directly from the repo

Then

```javascript
import React from 'react';
import { render } from 'react-dom';

import Donut from 'react-svg-donuts';

// The donut will be half filled
const progress = 50;

// The value will be wrapped inside a <strong> tag.
const renderProgress = progress => <strong>{progress}%</strong>;

render(
	<Donut progress={progress} onRender={renderProgress} />,
	document.getElementById('demo')
);
```

## Props

1. `progress: number (required)` - should be between 0 and 100 and represent the amount of the donut that should be filled. Works with negative values too (between -100 and 0).
2. `onRender: function (required)` - any function which returns a valid React node (either React element or null).

3. `prefix: string (optional)` - a string which will be used as prefix for all CSS classnames. Defaults to `donut`.

## LICENSE

MIT
