import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const SIZE = 34;
const PREFIX = 'donut';

const halfSize = SIZE / 2;
const circleProps = {
	cx: halfSize,
	cy: halfSize,
	r: halfSize - 1
};

const getClassName = (p, c) => `${p}${c}`;
const renderProgress = progress => <strong>{progress}</strong>;

const Donut = ({ progress = 0, onRender = renderProgress, prefix = PREFIX }) => (
	<div className={getClassName(prefix, progress < 0 ? ' is--negative' : '')}>
		<svg
			className={getClassName(prefix, '__canvas')}
			width={SIZE}
			height={SIZE}
			viewBox={`0 0 ${SIZE} ${SIZE}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle className={getClassName(prefix, '__frame')} {...circleProps} />

			<circle
				className={getClassName(prefix, '__circle')}
				strokeDasharray={`${Math.abs(progress)} 100`}
				{...circleProps}
			/>
		</svg>

		{typeof onRender === 'function' && <div className={getClassName(prefix, '__text')}>{onRender(progress)}</div>}
	</div>
);

Donut.propTypes = {
	progress: PropTypes.number,
	onRender: PropTypes.func,
	prefix: PropTypes.string
};

Donut.defaultProps = {
	progress: 0,
	onRender: renderProgress,
	prefix: PREFIX
};

export { Donut };
export default Donut;
