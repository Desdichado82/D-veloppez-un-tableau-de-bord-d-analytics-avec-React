
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar,ResponsiveContainer } from 'recharts';


function ScoreChart({ data }) {
  // Check if the data prop is in the expected format
  if (data && (data.data.score || data.data.todayScore)) {
    // Get the user score from the data prop
    // Assuming todayScore is a percentage value between 0 and 1
    const userScore = data.data.score ?? data.data.todayScore;

    // Convert the percentage to a whole number
    let todayScoreWholeNumber;
    if (userScore !== 0.3) {
      todayScoreWholeNumber = userScore * 100;
    } else {
      todayScoreWholeNumber = userScore * 10;
    }

    // Check if todayScorePercentage is a valid number
    if (typeof todayScoreWholeNumber !== 'number' || isNaN(todayScoreWholeNumber)) {
      console.error(`Invalid percentage value for todayScore:`, todayScoreWholeNumber);
    }

    const chartData = [
      { value: 100, fill: '#fff', innerRadius: 0 }, // White inner circle
      { value: todayScoreWholeNumber, fill: 'red', borderRadius: 5 }, // Actual data (adjust the fill color as needed)
    ];

    return (
      <ResponsiveContainer width="100%" height={265} style={{ backgroundColor: '#FBFBFB', borderRadius: 5 }}>
        <RadialBarChart
          cx={135}
          cy={135}
          innerRadius={95}
          outerRadius={120}
          background
          startAngle={-270}
          endAngle={90}
          clockWise={false}
          barSize={10}
          data={chartData}
        >
          <foreignObject x={15} y={20} width="200" height="100">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontWeight: 900, color: 'black' }}>
              Score
            </div>
          </foreignObject>

          <RadialBar minAngle={15} background clockWise={false} dataKey="value" cornerRadius={5} />

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
  } else {
    console.error('Data format is incorrect:', data);
    return <div>Loading...</div>;
  }
}

// Prop validation using PropTypes
ScoreChart.propTypes = {
  data: PropTypes.shape({
    score: PropTypes.number,
    todayScore: PropTypes.number,
  }).isRequired,
};

export default ScoreChart;