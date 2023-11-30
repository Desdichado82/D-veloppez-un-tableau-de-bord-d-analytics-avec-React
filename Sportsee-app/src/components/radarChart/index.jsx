
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';


function UserPerformanceRadarChart({ data }) {
  // Check if the data prop is in the expected format
  console.log('radar chart data ', data);
  if (data && data.data && Array.isArray(data.data.data)) {
    // Map the performance data to a format suitable for display
    const kindMap = {
      cardio: 'cardio',
      energy: 'énergie',
      endurance: 'endurance',
      strength: 'force',
      speed: 'vitesse',
      intensity: 'intensité',
    };
    const formattedData = data.data.data.map((item) => ({

    
      //kind: data.data.kind[item.kind], // Map kind to its corresponding label
      kind: kindMap[data.data.kind[item.kind]], // Map kind to its corresponding French word
      value: item.value,
    }));

    return (
      <ResponsiveContainer width="100%" height={265}>
        <RadarChart
          outerRadius={80}
          data={formattedData}
          style={{ backgroundColor: '#282D30', borderRadius: 5 }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fontSize: 12, fill: '#FFFFFF' /* Set your desired font size here */ }}
          />
          <Radar name="Performance" dataKey="value" fill="#E60000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  } else {
    console.error('Data format is incorrect:', data);
    return null;
  }
}

// Prop validation using PropTypes
UserPerformanceRadarChart.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number,
        value: PropTypes.number,
      })
    ),
    kind: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default UserPerformanceRadarChart;


