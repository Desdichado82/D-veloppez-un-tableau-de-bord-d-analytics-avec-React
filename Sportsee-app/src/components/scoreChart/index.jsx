

import { RadialBarChart, RadialBar,ResponsiveContainer } from 'recharts';


function ScoreChart({ data }) {
 
 console.log('this is the score component data ', data)
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
          data={data}
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
            {data[1].value}%
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