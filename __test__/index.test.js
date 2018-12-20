import React from 'react';
import renderer from 'react-test-renderer';
import Donut from '../src';
import ComplexDonut from '../src/complex';

describe('Donuts', () => {
	it('should render simple donut with default props', () => {
		const tree = renderer.create(<Donut />);

		expect(tree).toMatchSnapshot();
	});

	it('should render a simple donut with custom props', () => {
		const tree = renderer.create(<Donut progress={50} onRender={progress => <strong>{progress}%</strong>} />);

		expect(tree).toMatchSnapshot();
	});

	it('should render a complex donut', () => {
		const tree = renderer.create(
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
				textProps={{}}
				circleProps={{}}
			/>
		);

		expect(tree).toMatchSnapshot();
	});
});
