import { useState, useEffect } from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip,ResponsiveContainer } from 'recharts';
import { fetchUserData } from '../../services/api';

function ScoreChart({ userId }) {

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    console.log('Fetching user data...'); // Add this line
    fetchUserData(userId)
      .then((data) => {
        console.log('Data received from the API:', data); // Log the received data
        if (data && data.data) {
          setUserData(data.data);
        } else {
          console.error('Data format is incorrect:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);
  
  if (!userData) {
    return <div>Loading...</div>;
  }
  console.log( "this is the userdata",userData.score);
  // Check if either score or todayScore is present in the data


  
  // Assuming todayScore is a percentage value between 0 and 1
  const userScore = userData.score ?? userData.todayScore;
  console.log("this is the value for todayScore", userScore);

 

// Convert the percentage to a whole number
let todayScoreWholeNumber;
if (userScore !== 0.3) {
  todayScoreWholeNumber = userScore * 100;
} else {
  todayScoreWholeNumber = userScore * 10;
}
  
 

// Check if todayScorePercentage is a valid number
if (typeof  todayScoreWholeNumber !== 'number' || isNaN( todayScoreWholeNumber)) {
  console.error(`Invalid percentage value for todayScore:`, todayScoreWholeNumber);
}
  

const data = [
  { value: 100, fill: '#fff' ,  innerRadius: 0  }, // White inner circle
  { value: todayScoreWholeNumber, fill: 'red', borderRadius:5 }, // Actual data (adjust the fill color as needed)
];

  console.log(" this is the data", data);
  

  

  return (
    <ResponsiveContainer width="100%" height={265} style={{ backgroundColor: '#FBFBFB' ,borderRadius: 5}}>
      
      <RadialBarChart
     
     cx={135}
     cy={135}
     innerRadius={95} 
     outerRadius={120}
     startAngle={90}
     endAngle={-270}
     barSize={10}
     data={data}
     
     
   >
    <foreignObject x={15} y={20} width="200" height="100">
  <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontWeight: 900, color: 'black' }}>
    Score
  </div>
</foreignObject>
      
     <RadialBar
       minAngle={15}
       background
       clockWise={false}
       dataKey="value"
       startAngle={90}
       endAngle={45}
       cornerRadius={5}
     />

<foreignObject x={35} y={35} width={200} height={200} style={{ zIndex: -1 }}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: 'white',
              
            }}
          />
        </foreignObject>

<text
          x={135}
          y={115}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontWeight: 900, fill: 'black', fontSize: '24px' }}
        >
          {todayScoreWholeNumber}%
        </text>
     <foreignObject x={85} y={120} width={100} height={50}>
  <div
    xmlns="http://www.w3.org/1999/xhtml"
    style={{
      width: '100%',
      height: '100%',
      textAlign: 'center',
      fontWeight: 500,
      color: 'grey',
      fontSize: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
     de votre objectif
  </div>
</foreignObject>
    
   </RadialBarChart>
   
    </ResponsiveContainer>

  );
}

export default ScoreChart;
