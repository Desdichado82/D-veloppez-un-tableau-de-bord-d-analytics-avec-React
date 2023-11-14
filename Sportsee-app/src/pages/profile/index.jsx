
import styled from 'styled-components';
import 'material-icons'; // Import the material-icons package
import Greeting from '/src/components/greetings'; // Import the Greeting component
import DailyActivities from '/src/components/activities';
import AverageSessionDuration from '/src/components/lineChart';
import UserPerformanceRadarChart from '/src/components/radarChart';
import KeyUserData from '/src/components/keyData';
import ScoreChart from '/src/components/scoreChart';




const Dashboard = styled.main`
  width:100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const TopSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom:2rem;
  @media (min-width: 1024px) {
    flex: 2;
  }
`;




const SecondSection = styled.div`
  flex: 2;
  display: flex;
  gap: 1rem;

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;


const FirstContainer = styled.div`
  flex: 2;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div`
 display: flex ;
 justify-content: space-between;
 padding:0.5rem;
 gap:1rem;
 width:850px;
 height:265px;
`;

const SecondContainer = styled.div`
  flex: 1;
`;



const ProfilePage = ()=>{
    // Define the userId based on your route or user selection
  const userId = 18; // Replace with your actual userId
    return(
       
            <Dashboard>
              <TopSection>
                
                <Greeting userId={userId} />
               
              </TopSection>
            <SecondSection>
            <FirstContainer>
            <SubContainer>
             <DailyActivities userId={userId}></DailyActivities>
            </SubContainer>
            <SubContainer>
           <AverageSessionDuration userId={userId}></AverageSessionDuration>
           <UserPerformanceRadarChart userId={userId}></UserPerformanceRadarChart>
           <ScoreChart  userId={userId}></ScoreChart>
            </SubContainer>
          </FirstContainer>
          <SecondContainer>
           <KeyUserData userId={userId}></KeyUserData>
          </SecondContainer>
            </SecondSection>
            </Dashboard>
       
       

       
    );
}

export default ProfilePage;