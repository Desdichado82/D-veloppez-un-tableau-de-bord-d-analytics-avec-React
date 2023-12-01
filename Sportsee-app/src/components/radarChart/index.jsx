

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';


function UserPerformanceRadarChart({ data }) {
 
console.log('radar data:', data);
    return (
      <ResponsiveContainer width="100%" height={265}>
        <RadarChart
          outerRadius={80}
          data={data}
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
 
}


export default UserPerformanceRadarChart;


