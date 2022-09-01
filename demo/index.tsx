import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Donut, ComplexDonut } from '../dist';

import 'scriptex-socials';

const renderProgress = (progress: number): React.ReactNode => <strong>{progress}%</strong>;

const donuts = [
	{
		hint: '<Donut progress={0} onRender={renderProgress} />',
		content: <Donut progress={0} onRender={renderProgress} />
	},
	{
		hint: '<Donut progress={50} onRender={renderProgress} />',
		content: <Donut progress={50} onRender={renderProgress} />
	},
	{
		hint: '<Donut progress={100} onRender={renderProgress} />',
		content: <Donut progress={100} onRender={renderProgress} />
	},
	{
		hint: '<Donut progress={-30} onRender={renderProgress} />',
		content: <Donut progress={-30} onRender={renderProgress} />
	}
];

const complexDonuts = [
	{
		hint: `<ComplexDonut
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
/>`,
		content: (
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
		)
	}
];

const App = () => (
	<div className="demo">
		<a
			href="https://github.com/scriptex/react-accordion-ts"
			title="See code on Github"
			className="github-fork-ribbon"
			data-ribbon="See code on Github"
		>
			See code on Github
		</a>

		<h2>Simple donut</h2>

		<div className="demo__row">
			{donuts.map((donut, index) => (
				<div key={index} className="pie">
					{donut.content} <code>{donut.hint}</code>{' '}
				</div>
			))}
		</div>

		<h2>Complex donut</h2>

		<div className="demo__row">
			{complexDonuts.map((donut, index) => (
				<div key={index} className="pie">
					{donut.content}{' '}
					<code>
						<pre>{donut.hint}</pre>
					</code>{' '}
				</div>
			))}
		</div>

		<social-links></social-links>
	</div>
);

createRoot(document.getElementById('root')!).render(<App />);
