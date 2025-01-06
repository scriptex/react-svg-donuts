/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, waitFor } from '@testing-library/react';

import { Donut, ComplexDonut } from '../src';

describe('Donuts', () => {
	it('should render simple donut with default props', () => {
		const { asFragment } = render(<Donut />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should render a simple donut with custom props', () => {
		const { asFragment } = render(<Donut progress={50} onRender={progress => <strong>{progress}%</strong>} />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should render a complex donut', async () => {
		const { asFragment } = await waitFor(() =>
			render(
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
			)
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
