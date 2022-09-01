import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Donut, ComplexDonut } from '../dist';

import 'scriptex-socials';

const renderProgress = (progress: number): React.ReactNode => <strong>{progress}%</strong>;

const Donuts: React.FC = () => (
	<React.Fragment>
		<Donut progress={0} onRender={renderProgress} />
		<Donut progress={50} onRender={renderProgress} />
		<Donut progress={100} onRender={renderProgress} />
		<Donut progress={-30} onRender={renderProgress} />
	</React.Fragment>
);

const App = () => (
	<>
		<a
			href="https://github.com/scriptex/react-accordion-ts"
			title="See code on Github"
			className="github-fork-ribbon"
			data-ribbon="See code on Github"
		>
			See code on Github
		</a>

		<Donuts />

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

		<social-links></social-links>
	</>
);

createRoot(document.getElementById('root')!).render(<App />);
