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

## LICENSE

MIT
