import PropTypes from 'prop-types';
import { fetchUserActivity } from '/src/services/api.js';
import { useState, useEffect } from 'react';
import { BarChart as RechartsBarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';



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
      <RechartsBarChart data={activityData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} style={{ backgroundColor: '#FBFBFB', borderRadius: 5 }}>
        <text x={20} y={20} textAnchor="start" dominantBaseline="hanging" style={{ fontWeight: 900 }}>
          Activité quotidienne
        </text>
        <XAxis dataKey="day" />
        <YAxis orientation="right" dataKey="calories" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip className="custom-tooltip" content={CustomTooltip} />
        <Legend verticalAlign="top" align="right" height={40} />
        <Bar dataKey="kilogram" fill="#282D30" barSize={12} radius={[5, 5, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" barSize={12} radius={[5, 5, 0, 0]} />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}


// Prop validation using PropTypes
DailyActivities.propTypes = {
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  

};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    payload: PropTypes.shape({
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    }),
  })),
};

export default DailyActivities;


/*
Prop Validation (PropTypes): Added PropTypes for the userId prop to ensure it is of type number and is required.
Comments: Provided comments throughout the code to explain the purpose and functionality of each section.
ResponsiveContainer: Wrapped the entire chart in a ResponsiveContainer to make it responsive to different screen sizes.
CustomTooltip: Defined a custom tooltip component (CustomTooltip) for displaying additional information when hovering over the chart.
Fetch User Activity Data: Utilized the fetchUserActivity function to fetch user activity data based on the provided userId.
Data Formatting: Formatted the fetched data to match the expected format for the Recharts BarChart.
BarChart Components: Utilized various components from Recharts (BarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid, Legend) to create the bar chart with desired styles and interactions.
*/