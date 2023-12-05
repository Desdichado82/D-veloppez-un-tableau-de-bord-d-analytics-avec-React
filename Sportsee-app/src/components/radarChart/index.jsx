

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
         <PolarGrid
          gridType="polygon"
          
          radialLines={false}
          />
          <PolarAngleAxis
                dataKey="kind"
                type="category"
                domain={['A', 'B', 'C', 'D']}
                tick={{ fontSize: 12, fill: '#FFFFFF' }}
                tickCount={4}
                axisLine={false}
          />
          <Radar name="Performance" dataKey="value" fill="#E60000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
 
}


export default UserPerformanceRadarChart;


