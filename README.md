[![GitHub release](https://img.shields.io/github/release/scriptex/react-svg-donuts.svg)](https://github.com/scriptex/react-svg-donuts/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/react-svg-donuts.svg)](https://github.com/scriptex/react-svg-donuts/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-svg-donuts.svg)](https://github.com/scriptex/react-svg-donuts/commits/master)
[![Build Status](https://travis-ci.com/scriptex/react-svg-donuts.svg?branch=master)](https://travis-ci.com/scriptex/react-svg-donuts)
[![npm](https://img.shields.io/npm/dt/react-svg-donuts.svg)](https://www.npmjs.com/package/react-svg-donuts)
[![npm](https://img.shields.io/npm/v/react-svg-donuts.svg)](https://www.npmjs.com/package/react-svg-donuts)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/react-svg-donuts/README.md)](https://github.com/scriptex/react-svg-donuts/)

# React SVG Donuts

> A ReactJS component for simple (and complex) SVG donuts.

**The current version depends on the Hooks API introduced with React 16. If you need legacy React support, please use a 1.x.x version.**

## Demo

TL;DR [here is the demo](https://codepen.io/scriptex/pen/qJvaMe)

## Dependencies

1. NodeJS
2. NPM / Yarn
3. React and ReactDOM
4. A ReactJS application

## Usage

First install the package

```sh
$ npm i react-svg-donuts

# or

$ yarn add react-svg-donuts
```

Then

```javascript
import React from 'react';
import { render } from 'react-dom';

import Donut from 'react-svg-donuts';

// The donut will be half filled
const progress = 50;

// The value will be wrapped inside a <strong> tag.
const renderProgress = progress => <strong>{progress}%</strong>;

render(<Donut progress={progress} onRender={renderProgress} />, document.getElementById('demo'));
```

## Props

1. `progress: number (required)` - should be between 0 and 100 and represent the amount of the donut that should be filled. Works with negative values too (between -100 and 0).
2. `onRender: function (required)` - any function which returns a valid React node (either React element or null).
3. `prefix: string (optional)` - a string which will be used as prefix for all CSS classnames. Defaults to `donut`.

## CSS

There is a predefined stylesheet which can be used as is.
If you want it, just import it:

```css
@import 'react-svg-donuts/dist/index.css';
```

## Bonus - Complex Donut

```javascript
import React from 'react';
import { render } from 'react-dom';

import ComplexDonut from 'react-svg-donuts/complex';

render(
	<ComplexDonut
		size={200}
		radius={80}
		segments={[
			{
				color: '#FF8A80',
				value: 230
			},
			{
				color: '#FF80AB',
				value: 308
			},
			{
				color: '#B9F6CA',
				value: 520
			},
			{
				color: '#B388FF',
				value: 130
			},
			{
				color: '#8C9EFF',
				value: 200
			}
		]}
		thickness={40}
		startAngle={-90}
	/>,
	document.getElementById('demo')
);
```

## Props

1. `size: number (required)` - The size of the donut (width and height).
2. `radius: number (required)` - The radius of the donut.
3. `segments: array (required)` - An array of donut segments with the following shape:
    ```javascript
    [
    	{
    		value: 10,
    		color: '#BADA55'
    	},
    	{
    		value: 20,
    		color: '#CCDDEE'
    	}
    ];
    ```
4. `thickness: number (required)` - A number for the thickness of the donut
5. `startAngle: number (required)` - A degree between -360 and 360
6. `className: string (optional)` - Well, a custom css class name
7. `circleProps: object(optional)` - Your custom svg circle props
8. `textProps: object(optional)` - Your custom svg text props

## CSS

There is a predefined stylesheet which can be used as is.
If you want it, just import it:

```css
@import 'react-svg-donuts/dist/complex.css';
```

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Freact-svg-donuts&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
