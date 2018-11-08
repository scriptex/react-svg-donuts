import React from 'react';
import { render } from 'react-dom';

import Donut from '../src';
import ComplexDonut from '../src/complex';

const renderProgress = progress => <strong>{progress}%</strong>;
const Donuts = _ => (
	<React.Fragment>
		<Donut progress={0} onRender={renderProgress} />
		<Donut progress={50} onRender={renderProgress} />
		<Donut progress={100} onRender={renderProgress} />
		<Donut progress={-30} onRender={renderProgress} />
	</React.Fragment>
);

render(<Donuts />, document.getElementById('demo1'));

render(
	<ComplexDonut
		size={200}
		radius={80}
		segments={[230, 308, 520, 130, 200]}
		thickness={40}
		startAngle={-90}
	/>,
	document.getElementById('demo2')
);
