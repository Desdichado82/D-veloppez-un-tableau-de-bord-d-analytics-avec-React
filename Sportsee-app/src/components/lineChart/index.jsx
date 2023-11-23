
import styled from 'styled-components'; // Import styled-components
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceArea
  } from 'recharts';
import { useState, useEffect } from 'react';
import { fetchUserSession } from '../../services/api';




// Create a styled-component for custom Tooltip
const StyledCustomTooltip = styled.div`
  background-color: #ffff;
  color:black;
  padding: 5px;
`;

const COLORS = {
  WHITE: '#ffffff',
  PRIMARY_TEXT: 'rgba(255, 255, 255, 0.5)',
  PRIMARY_FILL: 'rgba(0, 0, 0, 0.5)',
  CHART_FILL: 'url(#colorUv)',
  CHART_STROKE: '#ffffff',
};

// Map numeric day values to French days of the week
const jourMap = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
  };

 // This function defines a custom tooltip for a chart.
function CustomTooltip({ active, payload }) {
  // Check if the tooltip is active and if there is payload data.
  if (active && payload && payload.length) {
    // Extract the session length from the first payload item.
    const sessionLength = payload[0].value;

    // Return a styled tooltip component with the session length.
    return (
      <StyledCustomTooltip>
        {`${sessionLength} mins`}
      </StyledCustomTooltip>
    );
  }

  // If the tooltip is not active or there is no payload data, return null.
  return null;
}

function AverageSessionDuration({ userId }) {
    const [sessionData, setSessionData] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null);

    useEffect(() => {
        // Fetch user session data using the API
        fetchUserSession(userId)
          .then((data) => {
           
            if (data && data.data && Array.isArray(data.data.sessions)) {
              const formattedData = data.data.sessions.map((session) => ({
                day: jourMap[session.day], // Map numeric day to French day
                sessionLength: session.sessionLength,
              }));
              setSessionData(formattedData);
            } else {
              console.error('Data format is incorrect:', data);
            }
          })
          .catch((error) => {
            console.error('Error fetching user session data:', error);
          });
      }, [userId]);

      const handleMouseMove = (activeIndex) => {
        setHoverIndex(activeIndex);
      };
  
    return (
      <ResponsiveContainer width="100%"  height="100%">
        <LineChart  data={sessionData}  style={{ backgroundColor: '#E60000',borderRadius: 5 }} margin={{
          top: 20,    // Add padding to the top
          right: 30,  // Add padding to the right
          bottom: 20, // Add padding to the bottom
          left: 30,   // Add padding to the left
        }}
        onMouseMove={(e) => handleMouseMove(e.activeTooltipIndex)}
        onMouseLeave={() => setHoverIndex(null)}
        >
              <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
          <stop offset="45%" stopColor={COLORS.WHITE} stopOpacity={0.8} />
          <stop offset="100%" stopColor={COLORS.WHITE} stopOpacity={0} />
        </linearGradient>
        </defs>
              <foreignObject x={20} y={40} width="200" height="100">
  <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.5)' }}>
    Durée moyenne des sessions
  </div>
</foreignObject>

        
        <XAxis dataKey="day" axisLine={{ stroke: 'transparent' }} tick={{ fill: '#ffff' }} tickLine={{ display: 'none' }}  />
        <YAxis  domain={[0, 100]}
  ticks={[0,5,10,15,20,25,30,35,40, 45,50]}
  axisLine={false} hide />
       
       <Tooltip content={<CustomTooltip />} cursor={false} />

       {hoverIndex !== null && hoverIndex < sessionData.length - 1 && (
          <ReferenceArea
            x1={hoverIndex}
            x2={hoverIndex + 1}
            fill="rgba(0, 0, 0, 0.3)"
            fillOpacity={1}
            ifOverflow="extendDomain"
            y1={0} // Set the y1 to the minimum y-value within the range
            y2={100} // Set the y2 to the maximum y-value within the range
          />
        )}

      <Line
  type="monotone"
  dataKey="sessionLength"
  fill='none'
  strokeWidth={3}
  stroke="url(#colorUv)"
  dot={(props) =>
    props.active ? (
      <circle r={6} fill="#FFFFFF" stroke="none" strokeWidth={2} onClick={() => handlePointClick(props.index)} />
    ) : null
  }
/>
      </LineChart>
      </ResponsiveContainer>

    );
  }
  
  export default AverageSessionDuration;