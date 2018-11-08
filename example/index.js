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
	document.getElementById('demo2')
);
