
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

// UserPerformanceRadarChart component displays performance data in a radar chart.
function UserPerformanceRadarChart({ data }) {
  // Log the data received for debugging purposes.
  console.log('radar data:', data);

  return (
    // ResponsiveContainer ensures the chart adjusts to the container size.
    <ResponsiveContainer width="100%" height={265}>
      {/* RadarChart is the main component for creating a radar chart. */}
      <RadarChart
        outerRadius={80}
        data={data}
        style={{ backgroundColor: '#282D30', borderRadius: 5 }}
      >
        {/* PolarGrid creates a grid for the radar chart. */}
        <PolarGrid
          gridType="polygon"
          radialLines={false} // Do not display radial lines.
        />
        {/* PolarAngleAxis represents the angular axis of the radar chart. */}
        <PolarAngleAxis
          dataKey="kind" // The data key for the categories.
          type="category"
          domain={['A', 'B', 'C', 'D']} // Define the categories.
          tick={{ fontSize: 12, fill: '#FFFFFF' }} // Style ticks.
          tickCount={4} // Number of ticks.
          axisLine={false} // Do not display the axis line.
        />
        {/* Radar represents the data points on the radar chart. */}
        <Radar name="Performance" dataKey="value" fill="#E60000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

// PropTypes for type-checking the props passed to UserPerformanceRadarChart.
UserPerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default UserPerformanceRadarChart;



