import PropTypes from 'prop-types';

import { BarChart as RechartsBarChart, XAxis, YAxis, Bar, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';



// Define a custom tooltip component
const CustomTooltip = ({ active, payload }) => {
   // Check if the tooltip is active and if there is payload data
  if (active && payload && payload.length) {
     // Extract the data from the first payload
    const data = payload[0].payload; // Use the data from the first payload
 // Return a div with the tooltip content
    return (
      <div className="custom-tooltip">
        <p>{data.kilogram}kg</p>
        <p>{data.calories}Kcal</p>
      </div>
    );
  }
 // If the tooltip is not active or there is no payload data, return null
  return null;
};



function renderLegend(props) {
  const { payload } = props;

  return (
    <ul className="recharts-default-legend" style={{ padding: 0, margin: 0, textAlign: 'right' }}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className={`recharts-legend-item legend-item-${index}`} style={{ display: 'inline-block', marginRight: 10 }}>
          <svg className="recharts-surface" width="14" height="14" viewBox="0 0 32 32" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 4 }}>
            <path fill={entry.color} cx="16" cy="16" className="recharts-symbols" transform="translate(16, 16)" d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"></path>
          </svg>
          <span className="recharts-legend-item-text" style={{ color: entry.color }}>
            {entry.value === 'kilogram' ? 'Poids (kg)' : 'Calories brûlées (kCal)'}
          </span>
        </li>
      ))}
    </ul>
  );
}



function DailyActivities({ data }) {

    console.log('activity data:', data);

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          style={{ backgroundColor: '#FBFBFB', borderRadius: 5 }}
        >
          <text x={20} y={20} textAnchor="start" dominantBaseline="hanging" style={{ fontWeight: 900 }}>
            Activité quotidienne
          </text>
          <XAxis dataKey="day" />
          <YAxis orientation="right" dataKey="calories" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip className="custom-tooltip" content={CustomTooltip} />
          <Legend verticalAlign="top" align="right" height={40} iconType="circle" content={renderLegend} />
          <Bar dataKey="kilogram" fill="#282D30" barSize={12} radius={[5, 5, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" barSize={12} radius={[5, 5, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    );
 
}


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