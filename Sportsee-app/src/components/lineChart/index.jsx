import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts';
import { useState } from 'react';

// Styled-component for custom Tooltip
const StyledCustomTooltip = styled.div`
  background-color: #ffff;
  color: black;
  padding: 5px;
`;

// Color constants
const COLORS = {
  WHITE: '#ffffff',
  PRIMARY_TEXT: 'rgba(255, 255, 255, 0.5)',
  PRIMARY_FILL: 'rgba(0, 0, 0, 0.5)',
  CHART_FILL: 'url(#colorUv)',
  CHART_STROKE: '#ffffff',
};

// Custom Tooltip component
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const sessionLength = payload[0].value;
    return <StyledCustomTooltip>{`${sessionLength} mins`}</StyledCustomTooltip>;
  }
  return null;
}

// AverageSessionDuration component
function AverageSessionDuration({ data }) {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = (activeIndex) => {
    setHoverIndex(activeIndex);
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        style={{ backgroundColor: '#E60000', borderRadius: 5 }}
        margin={{
          top: 20,
          right: 30,
          bottom: 20,
          left: 30,
        }}
        onMouseMove={(e) => handleMouseMove(e.activeTooltipIndex)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        {/* Gradient definition for the line chart */}
        <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="45%" stopColor={COLORS.WHITE} stopOpacity={0.8} />
            <stop offset="100%" stopColor={COLORS.WHITE} stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Text label */}
        <foreignObject x={20} y={40} width="200" height="100">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.5)' }}>
            Durée moyenne des sessions
          </div>
        </foreignObject>

        {/* X and Y Axes */}
        <XAxis dataKey="day" axisLine={{ stroke: 'transparent' }} tick={{ fill: '#ffff' }} tickLine={{ display: 'none' }} />
        <YAxis domain={[0, 100]} ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]} axisLine={false} hide />

        {/* Tooltip */}
        <Tooltip content={<CustomTooltip />} cursor={false} />

        {/* Highlight area on hover */}
        {hoverIndex !== null && hoverIndex < data.length - 1 && (
          <ReferenceArea
            x1={hoverIndex}
            x2={hoverIndex + 1}
            fill="rgba(0, 0, 0, 0.3)"
            fillOpacity={1}
            ifOverflow="extendDomain"
            y1={0}
            y2={100}
          />
        )}

        {/* Line representing session lengths */}
        <Line
          type="monotone"
          dataKey="sessionLength"
          fill="none"
          strokeWidth={3}
          stroke="url(#colorUv)"
          dot={(props) =>
            props.active ? (
              <circle
                r={6}
                fill="#FFFFFF"
                stroke="none"
                strokeWidth={2}
                onClick={() => handlePointClick(props.index)}
              />
            ) : null
          }
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// PropTypes for the AverageSessionDuration component
AverageSessionDuration.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
};



export default AverageSessionDuration;
