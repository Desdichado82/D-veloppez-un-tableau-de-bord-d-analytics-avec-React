import { fetchUserActivity } from '/src/services/api.js';
import { useState, useEffect } from 'react';
import { BarChart as RechartsBarChart, XAxis,YAxis,Bar,Tooltip,CartesianGrid,Legend, ResponsiveContainer } from 'recharts';

// Define a custom tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Use the data from the first payload

    return (
      <div className="custom-tooltip">
        <p>{data.kilogram}kg</p>
        <p>{data.calories}Kcal</p>
      </div>
    );
  }

  return null;
};

function DailyActivities({ userId }) {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    // Fetch user activity data
    fetchUserActivity(userId)
      .then((data) => {
       
        if (data && data.data.sessions && Array.isArray(data.data.sessions)) {
          const formattedData = data.data.sessions.map((session, index) => ({
            day: (index + 1).toString(), // Convert index to a sequential day
            kilogram: session.kilogram,
            calories: session.calories,
          }));
          
          setActivityData(formattedData);
        } else {
          console.error('Data format is incorrect:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching user activity data:', error);
      });
  }, [userId]);
  


  return (
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart  data={activityData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} style={{ backgroundColor: '#FBFBFB' ,borderRadius: 5}}>
      <text x={20} y={20} textAnchor="start" dominantBaseline="hanging" style={{ fontWeight: 900 }}>
    Activité quotidienne
  </text>
      <XAxis dataKey="day" />
      <YAxis  orientation="right" dataKey="calories"/>
      <CartesianGrid strokeDasharray="3 3"  />
      <Tooltip  className ='custom-tooltip' content={CustomTooltip} />
      <Legend verticalAlign="top" align="right" height={40} />
      <Bar dataKey="kilogram" fill="#282D30"  barSize={12} radius={[5, 5, 0, 0]}/>
      <Bar dataKey="calories" fill="#E60000" barSize={12} radius={[5, 5, 0, 0]} />
    </RechartsBarChart>
      </ResponsiveContainer>
      
 
    
  );
}

export default DailyActivities;
