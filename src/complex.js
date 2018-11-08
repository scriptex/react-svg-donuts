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
			colors: ['#FF8A80', '#FF80AB', '#B9F6CA', '#B388FF', '#8C9EFF'],
			segments: [],
			transforms: this.transforms(),
			isLoaded: false
		};
	}

	total = values => values.reduce((acc, val) => acc + val);

	percent = (value, total) => value / total;

	transforms = () => {
		const rotations = [];
		const textCoords = [];
		const { startAngle, segments } = this.props;
		const total = this.total(segments);

		rotateAngle = startAngle;

		this.sortValues(segments).forEach(segment => {
			const data = rotateAngle;
			const percent = this.percent(segment, total);
			const { x, y } = this.textCoordinates(segment, rotateAngle);

			rotations.push(data);
			textCoords.push({ x, y });

			const value = rotations[rotations.length - 1] || startAngle;

			rotateAngle = percent * 360 + value;
		});

		return { rotations, textCoords };
	};

	sortValues = values => values.sort((a, b) => b - a);

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
			colors,
			transforms: { rotations, textCoords }
		} = this.state;

		this.setState({
			segments: this.sortValues(segments).map((segment, i) => ({
				value: segment,
				color: colors[i],
				percent: this.percent(segment, total),
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
		const { size, radius, thickness } = this.props;
		const halfSize = size / 2;
		const circumference = this.circumference(radius);

		return (
			<div
				className={`donut-complex${
					this.state.isLoaded ? ' donut-complex--loaded' : ''
				}`}
			>
				<svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
					{this.state.segments.map((segment, i) => (
						<g key={i}>
							<circle
								r={radius}
								cx={halfSize}
								cy={halfSize}
								fill="none"
								transform={segment.rotate}
								stroke={segment.color}
								strokeWidth={thickness}
								strokeDasharray={circumference}
								strokeDashoffset={this.strokeDashOffset(
									segment.value,
									circumference
								)}
							/>
							<text
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
	size: PropTypes.number,
	radius: PropTypes.number,
	segments: PropTypes.array,
	thickness: PropTypes.number,
	startAngle: PropTypes.number
};

ComplexDonut.defaultProps = {
	size: 160,
	radius: 60,
	segments: [],
	thickness: 30,
	startAngle: -90
};

export { ComplexDonut };
export default ComplexDonut;
