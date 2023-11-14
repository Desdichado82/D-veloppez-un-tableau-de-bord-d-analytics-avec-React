import { useState, useEffect } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { fetchUserPerformance } from '../../services/api';

function UserPerformanceRadarChart({ userId }) {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
  

    // Fetch user performance data using the API
    fetchUserPerformance(userId)
      .then((data) => {
      

        if (data && data.data && Array.isArray(data.data.data)) {
          const reformattedData = data.data.data.map((item) => ({
            kind: data.data.kind[item.kind], // Map kind to its corresponding label
            value: item.value,
          }));
         
          setPerformanceData(reformattedData);
        } else {
          console.error('Data format is incorrect:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching user performance data:', error);
      });
  }, [userId]);

  return (
    <ResponsiveContainer width="100%" height={265}>
      <RadarChart  outerRadius={80} data={performanceData} style={{ backgroundColor: '#282D30', borderRadius: 5 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12 /* Set your desired font size here */ }}/>
        <Radar name="Performance" dataKey="value" fill="#E60000" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default UserPerformanceRadarChart;


