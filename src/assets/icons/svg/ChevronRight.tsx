import Svg, { Path } from 'react-native-svg';

const SvgChevronRight = ({
  size = 24,
  stroke = 2,
  color = 'currentColor',
  ...props
}: {
  size: number;
  stroke: number;
  color: string;
}) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    stroke={color}
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={stroke}
    className=''
    viewBox='0 0 24 24'
    {...props}>
    <Path stroke='none' d='M0 0h24v24H0z' />
    <Path d='M9 6l6 6l-6 6' />
  </Svg>
);
export default SvgChevronRight;
