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

render(
	<React.Fragment>
		<Donuts />
		<ComplexDonut
			size={160}
			radius={60}
			segments={[230, 308, 520, 130, 200]}
			thickness={30}
			startAngle={-90}
		/>
	</React.Fragment>,
	document.getElementById('demo')
);
