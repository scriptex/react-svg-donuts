import React from 'react';
import PropTypes from 'prop-types';

let rotateAngle = 0;

import './complex.css';

const getTotal = values => values.reduce((acc, { value }) => acc + value, 0);
const getPercent = (value, total) => value / total;
const sortValues = values => values.sort((a, b) => b.value - a.value);
const getCircumference = radius => 2 * Math.PI * radius;
const convertDegreesToRadians = angle => angle * (Math.PI / 180);

const ComplexDonut = props => {
	let loadTimeout;

	const total = getTotal(props.segments);

	const getTextCoordinates = (value, angleOffset) => {
		const { size, radius, segments } = props;
		const total = getTotal(segments);
		const angle = (getPercent(value, total) * 360) / 2 + angleOffset;
		const radians = convertDegreesToRadians(angle);

		return {
			x: radius * Math.cos(radians) + size / 2,
			y: radius * Math.sin(radians) + size / 2
		};
	};

	const getTransforms = () => {
		const rotations = [];
		const textCoords = [];
		const { startAngle, segments } = props;
		const total = getTotal(segments);

		rotateAngle = startAngle;

		sortValues(segments).forEach(({ value }) => {
			const data = rotateAngle;
			const percent = getPercent(value, total);
			const { x, y } = getTextCoordinates(value, rotateAngle);

			rotations.push(data);
			textCoords.push({ x, y });

			const result = rotations[rotations.length - 1] || startAngle;

			rotateAngle = percent * 360 + result;
		});

		return { rotations, textCoords };
	};

	const getStrokeDashOffset = (value, circumference) => {
		const diff = getPercent(value, total) * circumference;
		return circumference - diff;
	};

	const [segments, setSegments] = React.useState([]);
	const [isLoaded, setIsLoaded] = React.useState(false);

	React.useEffect(() => {
		const { segments, size } = props;
		const { rotations, textCoords } = getTransforms();

		setSegments(
			sortValues(segments).map(({ value, color }, i) => ({
				value,
				color,
				percent: getPercent(value, total),
				rotate: `rotate(${rotations[i]}, ${size / 2}, ${size / 2})`,
				textCoords: textCoords[i]
			}))
		);

		loadTimeout = setTimeout(() => {
			setIsLoaded(true);
		}, 100);

		return () => {
			clearTimeout(loadTimeout);
		};
	}, []);

	const { size, radius, thickness, className, circleProps, textProps } = props;
	const halfSize = size / 2;
	const circumference = getCircumference(radius);

	return (
		<div className={`donut-complex${isLoaded ? ' donut-complex--loaded ' : ' '}${className}`}>
			<svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
				{segments.map((segment, i) => (
					<g key={i}>
						<circle
							{...circleProps}
							r={radius}
							cx={halfSize}
							cy={halfSize}
							transform={segment.rotate}
							stroke={segment.color}
							strokeWidth={thickness}
							strokeDasharray={circumference}
							strokeDashoffset={getStrokeDashOffset(segment.value, circumference)}
						/>
						<text
							{...textProps}
							x={segment.textCoords.x}
							y={segment.textCoords.y}
							dy="3px"
							textAnchor="middle"
						>
							{`${Math.round(segment.percent * 100)}%`}
						</text>
					</g>
				))}
			</svg>
		</div>
	);
};

ComplexDonut.propTypes = {
	size: PropTypes.number.isRequired,
	radius: PropTypes.number.isRequired,
	segments: PropTypes.arrayOf(
		PropTypes.shape({
			color: PropTypes.string,
			value: PropTypes.number
		})
	).isRequired,
	thickness: PropTypes.number.isRequired,
	startAngle: PropTypes.number,
	className: PropTypes.string,
	circleProps: PropTypes.object,
	textProps: PropTypes.object
};

ComplexDonut.defaultProps = {
	size: 160,
	radius: 60,
	segments: [],
	thickness: 30,
	startAngle: -90,
	className: '',
	circleProps: {},
	textProps: {}
};

export { ComplexDonut };
export default ComplexDonut;
