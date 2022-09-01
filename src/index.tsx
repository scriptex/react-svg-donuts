import * as React from 'react';

export interface DonutProps {
	prefix?: string;
	progress?: number;
	onRender?: (value: number) => React.ReactNode;
}

const SIZE = 34;
const PREFIX = 'donut';

const halfSize = SIZE / 2;
const circleProps = {
	cx: halfSize,
	cy: halfSize,
	r: halfSize - 1
};

const getClassName = (p: string, c: string): string => `${p}${c}`;
const renderProgress = (progress: number): React.ReactNode => <strong>{progress}</strong>;

export const Donut = ({ progress = 0, onRender = renderProgress, prefix = PREFIX }: DonutProps) => (
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

export type ComplexDonutTextCoords = {
	x: number;
	y: number;
};

export type ComplexDonutPart = {
	color: string;
	value: number;
};

export type ComplexDonutSegment = ComplexDonutPart & {
	rotate: string;
	percent: number;
	textCoords: ComplexDonutTextCoords;
};

export interface ComplexDonutProps {
	size?: number;
	parts?: ComplexDonutPart[];
	radius?: number;
	className?: string;
	thickness?: number;
	textProps?: React.SVGProps<SVGTextElement>;
	startAngle?: number;
	circleProps?: React.SVGProps<SVGCircleElement>;
}

let rotateAngle = 0;

const getTotal = (values: ComplexDonutPart[]): number => values.reduce((acc, { value }) => acc + value, 0);
const getPercent = (value: number, total: number): number => value / total;
const sortValues = (values: ComplexDonutPart[]): ComplexDonutPart[] => values.sort((a, b) => b.value - a.value);
const getCircumference = (radius: number): number => 2 * Math.PI * radius;
const convertDegreesToRadians = (angle: number): number => angle * (Math.PI / 180);

export const ComplexDonut: React.FC<Readonly<ComplexDonutProps>> = ({
	size = 160,
	parts = [],
	radius = 60,
	className = '',
	thickness = 30,
	textProps = {},
	startAngle = -90,
	circleProps = {}
}: ComplexDonutProps) => {
	const [segments, setSegments] = React.useState<ComplexDonutSegment[]>([]);
	const [isLoaded, setIsLoaded] = React.useState(false);

	const total = React.useMemo(() => getTotal(parts), [parts]);
	const halfSize = React.useMemo(() => size / 2, [size]);
	const circumference = React.useMemo(() => getCircumference(radius), [radius]);

	const getTextCoordinates = React.useCallback(
		(value: number, angleOffset: number) => {
			const total = getTotal(parts);
			const angle = (getPercent(value, total) * 360) / 2 + angleOffset;
			const radians = convertDegreesToRadians(angle);

			return {
				x: radius * Math.cos(radians) + size / 2,
				y: radius * Math.sin(radians) + size / 2
			};
		},
		[size, parts, radius]
	);

	const getTransforms = React.useCallback(() => {
		const rotations: number[] = [];
		const textCoords: Array<Record<'x' | 'y', number>> = [];

		const total = getTotal(parts);

		rotateAngle = startAngle;

		sortValues(parts).forEach(({ value }) => {
			const data = rotateAngle;
			const percent = getPercent(value, total);
			const { x, y } = getTextCoordinates(value, rotateAngle);

			rotations.push(data);
			textCoords.push({ x, y });

			const result = rotations[rotations.length - 1] || startAngle;

			rotateAngle = percent * 360 + result;
		});

		return { rotations, textCoords };
	}, [parts, startAngle, getTextCoordinates]);

	const getStrokeDashOffset = React.useCallback(
		(value: number, circumference: number) => circumference - getPercent(value, total) * circumference,
		[total]
	);

	React.useEffect(() => {
		const { rotations, textCoords } = getTransforms();

		setSegments(
			sortValues(parts).map(({ value, color }, i) => ({
				value,
				color,
				percent: getPercent(value, total),
				rotate: `rotate(${rotations[i]}, ${size / 2}, ${size / 2})`,
				textCoords: textCoords[i]
			}))
		);

		const loadTimeout = setTimeout(() => {
			setIsLoaded(true);
		}, 100);

		return () => {
			clearTimeout(loadTimeout);
		};
	}, [size, parts, total, getTransforms]);

	return (
		<div className={`donut-complex${isLoaded ? ' donut-complex--loaded ' : ' '}${className}`}>
			<svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
				{segments.map((segment: ComplexDonutSegment, i: number) => (
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
