import React from 'react';
import PropTypes from 'prop-types';

let rotateAngle = 0;

import './complex.css';

class ComplexDonut extends React.Component {
	loadTimeout = 0;

	constructor(props) {
		super(props);

		this.state = {
			total: this.total(props.segments),
			segments: [],
			transforms: this.transforms(),
			isLoaded: false
		};
	}

	total = values => values.reduce((acc, { value }) => acc + value, 0);

	percent = (value, total) => value / total;

	transforms = () => {
		const rotations = [];
		const textCoords = [];
		const { startAngle, segments } = this.props;
		const total = this.total(segments);

		rotateAngle = startAngle;

		this.sortValues(segments).forEach(({ value }) => {
			const data = rotateAngle;
			const percent = this.percent(value, total);
			const { x, y } = this.textCoordinates(value, rotateAngle);

			rotations.push(data);
			textCoords.push({ x, y });

			const result = rotations[rotations.length - 1] || startAngle;

			rotateAngle = percent * 360 + result;
		});

		return { rotations, textCoords };
	};

	sortValues = values => values.sort((a, b) => b.value - a.value);

	circumference = radius => 2 * Math.PI * radius;

	degreesToRadians = angle => angle * (Math.PI / 180);

	strokeDashOffset = (value, circumference) => {
		const diff = this.percent(value, this.state.total) * circumference;
		return circumference - diff;
	};

	textCoordinates = (value, angleOffset) => {
		const { size, radius, segments } = this.props;
		const total = this.total(segments);
		const angle = (this.percent(value, total) * 360) / 2 + angleOffset;
		const radians = this.degreesToRadians(angle);

		return {
			x: radius * Math.cos(radians) + size / 2,
			y: radius * Math.sin(radians) + size / 2
		};
	};

	componentDidMount = () => {
		const { segments, size } = this.props;
		const {
			total,
			transforms: { rotations, textCoords }
		} = this.state;

		this.setState({
			segments: this.sortValues(segments).map(({ value, color }, i) => ({
				value,
				color,
				percent: this.percent(value, total),
				rotate: `rotate(${rotations[i]}, ${size / 2}, ${size / 2})`,
				textCoords: textCoords[i]
			}))
		});

		this.loadTimeout = setTimeout(() => {
			this.setState({
				isLoaded: true
			});
		}, 100);
	};

	componentWillUnmount() {
		this.clearTimeout(this.loadTimeout);
	}

	render() {
		const { size, radius, thickness, className, circleProps, textProps } = this.props;
		const halfSize = size / 2;
		const circumference = this.circumference(radius);

		return (
			<div className={`donut-complex${this.state.isLoaded ? ' donut-complex--loaded ' : ' '}${className}`}>
				<svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
					{this.state.segments.map((segment, i) => (
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
								strokeDashoffset={this.strokeDashOffset(segment.value, circumference)}
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
	}
}

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
