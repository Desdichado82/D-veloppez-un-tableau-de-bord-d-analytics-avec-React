
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

// ScoreChart component displays a score in a radial bar chart.
function ScoreChart({ data }) {
  // Log the data received for debugging purposes.
  console.log('this is the score component data ', data);

  return (
    // ResponsiveContainer ensures the chart adjusts to the container size.
    <ResponsiveContainer width="100%" height={265} style={{ backgroundColor: '#FBFBFB', borderRadius: 5 }}>
      {/* RadialBarChart is the main component for creating a radial bar chart. */}
      <RadialBarChart
        cx={135}
        cy={135}
        innerRadius={95}
        outerRadius={120}
        background
        startAngle={-270}
        endAngle={90}
        clockWise={false}
        barSize={10}
        data={data}
      >
        {/* Text label */}
        <foreignObject x={15} y={20} width="200" height="100">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontWeight: 900, color: 'black' }}>
            Score
          </div>
        </foreignObject>

        {/* RadialBar represents the data points on the radial bar chart. */}
        <RadialBar minAngle={15} background clockWise={false} dataKey="value" cornerRadius={5} />

        {/* Background circle */}
        <foreignObject x={35} y={35} width={200} height={200} style={{ zIndex: -1 }}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: 'white',
            }}
          />
        </foreignObject>

        {/* Text displaying the score percentage */}
        <text
          x={135}
          y={115}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontWeight: 900, fill: 'black', fontSize: '24px' }}
        >
          {data[1].value}%
        </text>

        {/* Secondary text */}
        <foreignObject x={85} y={120} width={100} height={50}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              textAlign: 'center',
              fontWeight: 500,
              color: 'grey',
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            de votre objectif
          </div>
        </foreignObject>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

// PropTypes for type-checking the props passed to ScoreChart.
ScoreChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ScoreChart;
