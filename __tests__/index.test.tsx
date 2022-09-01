import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Donut, ComplexDonut } from '../src';

export async function wait(ms = 0) {
	await renderer.act(() => {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	});
}

describe('Donuts', () => {
	it('should render simple donut with default props', () => {
		const tree = renderer.create(<Donut />).toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render a simple donut with custom props', () => {
		const tree = renderer
			.create(<Donut progress={50} onRender={progress => <strong>{progress}%</strong>} />)
			.toJSON();

		expect(tree).toMatchSnapshot();
	});

	it('should render a complex donut', () => {
		let tree: renderer.ReactTestRenderer;

		renderer.act(() => {
			tree = renderer.create(
				<ComplexDonut
					size={200}
					radius={80}
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
					thickness={40}
					startAngle={-90}
					textProps={{}}
					circleProps={{}}
				/>
			);
		});

		wait(1000);

		expect(tree!.toJSON()).toMatchSnapshot();
	});
});
