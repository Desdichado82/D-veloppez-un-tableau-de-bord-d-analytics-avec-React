
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

  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      const sessionLength = payload[0].value;
      return (
        <StyledCustomTooltip>
          {`${sessionLength} mins`}
        </StyledCustomTooltip>
      );
    }
  
    return null;
  }

function AverageSessionDuration({ userId }) {
    const [sessionData, setSessionData] = useState([]);
    const [referenceArea, setReferenceArea] = useState(null);

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

      const handlePointClick = (index) => {
        console.log(index);
        // Update the reference area based on the clicked point
        setReferenceArea({ x1: 0, x2: index, fill: 'rgba(0, 0, 0, 0.5)', fillOpacity: 1 });
        
      };
  
    return (
      <ResponsiveContainer width="100%"  height="100%">
        <LineChart  data={sessionData}  style={{ backgroundColor: '#E60000',borderRadius: 5 }} margin={{
          top: 20,    // Add padding to the top
          right: 30,  // Add padding to the right
          bottom: 20, // Add padding to the bottom
          left: 30,   // Add padding to the left
        }}>
              <defs>
          <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
            <stop offset="45%" stopColor="#ffffff" stopOpacity={0.8}/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0}/>
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
      {referenceArea && <ReferenceArea {...referenceArea} />}
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