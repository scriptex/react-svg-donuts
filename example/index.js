import React from 'react';
import { render } from 'react-dom';

import Donut from '../src';

const renderProgress = progress => <strong>{progress}%</strong>;
const Donuts = _ => (
	<React.Fragment>
		<Donut progress={0} onRender={renderProgress} />
		<Donut progress={50} onRender={renderProgress} />
		<Donut progress={100} onRender={renderProgress} />
		<Donut progress={-30} onRender={renderProgress} />
	</React.Fragment>
);

render(<Donuts />, document.getElementById('demo'));
