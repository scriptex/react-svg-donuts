import React from 'react';

let rotateAngle = 0;

class ComplexDonut extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			total: this.total(props.segments),
			colors: ['#FF8A80', '#FF80AB', '#B9F6CA', '#B388FF', '#8C9EFF'],
			segments: [],
			transforms: this.transforms()
		};
	}

	total = values => values.reduce((acc, val) => acc + val);

	percent = (value, total) => value / total;

	transforms = () => {
		const transforms = [];
		const textCoords = [];
		const { startAngle, segments } = this.props;
		const total = this.total(segments);

		rotateAngle = startAngle;

		this.sortValues(segments).forEach(segment => {
			const data = rotateAngle;
			const percent = this.percent(segment, total);

			transforms.push(data);

			const value = transforms[transforms.length - 1] || startAngle;

			rotateAngle = percent * 360 + value;
		});

		return transforms;
	};

	sortValues = values => values.sort((a, b) => b - a);

	circumference = radius => 2 * Math.PI * radius;

	strokeDashOffset = (value, circumference) => {
		const diff = this.percent(value, this.state.total) * circumference;
		return circumference - diff;
	};

	componentDidMount = () => {
		const { segments, size } = this.props;
		const { total, colors, transforms } = this.state;

		this.setState({
			segments: this.sortValues(segments).map((segment, i) => ({
				value: segment,
				color: colors[i],
				percent: this.percent(segment, total),
				rotate: `rotate(${transforms[i]}, ${size / 2}, ${size / 2})`
			}))
		});
	};

	render() {
		const { size, radius, thickness } = this.props;
		const halfSize = size / 2;
		const circumference = this.circumference(radius);

		return (
			<svg height="160" width="160" viewBox="0 0 160 160">
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
						<text>{segment.percent * 100}%</text>
					</g>
				))}
			</svg>
		);
	}
}

export { ComplexDonut };
export default ComplexDonut;
