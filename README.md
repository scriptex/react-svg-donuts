[![Travis CI](https://travis-ci.com/scriptex/react-svg-donuts.svg?branch=master)](https://travis-ci.com/scriptex/react-svg-donuts)
[![Github Build](https://github.com/scriptex/react-svg-donuts/workflows/Build/badge.svg)](https://github.com/scriptex/react-svg-donuts/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/react-svg-donuts/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/react-svg-donuts&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-react-svg-donuts-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/react-svg-donuts/badge)](https://www.codefactor.io/repository/github/scriptex/react-svg-donuts)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/react-svg-donuts/README.md?pixel)](https://github.com/scriptex/react-svg-donuts/)

# React SVG Donuts

> A React component for simple (and complex) SVG donuts.

**The current version depends on the Hooks API introduced with React 16.8. If you need legacy React support, please use a 1.x.x version.**

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/react-svg-donuts?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/react-svg-donuts?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/react-svg-donuts?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/react-svg-donuts)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/react-svg-donuts?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/react-svg-donuts?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/react-svg-donuts?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/react-svg-donuts?style=plastic)

## Demo

TL;DR [here is the demo](https://react-svg-donuts.atanas.info/)

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

import { Donut, ComplexDonut } from 'react-svg-donuts';

// The donut will be half filled
const progress = 50;

// The value will be wrapped inside a <strong> tag.
const renderProgress = progress => <strong>{progress}%</strong>;

const MyComponent = () => (
	<>
		<Donut progress={progress} onRender={renderProgress} />, document.getElementById('demo')
		<ComplexDonut
			size={200}
			parts={[
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
			radius={80}
			thickness={40}
			startAngle={-90}
		/>
	</>
);
```

## Props

### Donut props

| Prop       | Type       | Required | Default                                   | Description                                                             |
| ---------- | ---------- | -------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| `prefix`   | `string`   | false    | 'donut'                                   | String used as a prefix for the CSS class names                         |
| `progress` | `number`   | false    | 0                                         | A number between 0 and 100                                              |
| `onRender` | `Function` | false    | (progress) => <strong>{progress}</strong> | Function which runs after the Donut is rendered and returns a ReactNode |

### Complex donut props

| Prop        | Type                                | Required | Default | Description                                 |
| ----------- | ----------------------------------- | -------- | ------- | ------------------------------------------- |
| size        | number                              | false    | 160     | The width and height of the donut           |
| parts       | { color: string; value: number; }[] | false    | []      | The donut parts                             |
| radius      | number                              | false    | 60      | The radius of the <circle /> element        |
| className   | string                              | false    | ''      | Custom CSS class name for the Donut         |
| thickness   | number                              | false    | 30      | Stroke width of the <circle /> element      |
| textProps   | SVGProps for SVGTextElement         | false    | {}      | Additional props for the <text /> element   |
| startAngle  | number                              | false    | -90     | Number between -360 and 360                 |
| circleProps | SVGProps for SVGCircleElement       | false    | {}      | Additional props for the <circle /> element |

## CSS

There is a predefined stylesheet which can be used as is.
If you want it, just import it:

```css
@import 'react-svg-donuts/src/index.css';
```

or

```javascript
import 'react-svg-donuts/src/index.css';
```

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>

<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
