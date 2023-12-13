// Import necessary React modules and components
import styled from 'styled-components';
import 'material-icons'; // Import the material-icons package
import { useLocation } from 'react-router-dom';

// Import custom components
import Greeting from '/src/components/greetings';
import DailyActivities from '/src/components/activities';
import AverageSessionDuration from '/src/components/lineChart';
import UserPerformanceRadarChart from '/src/components/radarChart';
import KeyUserData from '/src/components/keyData';
import ScoreChart from '/src/components/scoreChart';

// Styled components for styling the Profile page
const Dashboard = styled.main`
  width: 100%;
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
  margin-bottom: 2rem;
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
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 1rem;
  width: 850px;
  height: 265px;
`;

const SecondContainer = styled.div`
  flex: 1;
`;

// Profile page component
const ProfilePage = () => {
  // Get the location object from the useLocation hook
  const location = useLocation();
  // Get the data from the state object
  const { userData, userActivity, userSession, userPerformance, userScore } = location.state;

  // Use the data to render the profile page
  return (
    <Dashboard>
      {/* Top section with user greeting */}
      <TopSection>
        <Greeting data={userData} />
      </TopSection>

      {/* Second section with various components */}
      <SecondSection>
        {/* First container with daily activities, session duration, radar chart, and score chart */}
        <FirstContainer>
          <SubContainer>
            <DailyActivities data={userActivity} />
          </SubContainer>
          <SubContainer>
            <AverageSessionDuration data={userSession} />
            <UserPerformanceRadarChart data={userPerformance} />
            <ScoreChart data={userScore} />
          </SubContainer>
        </FirstContainer>

        {/* Second container with key user data */}
        <SecondContainer>
          <KeyUserData data={userData} />
        </SecondContainer>
      </SecondSection>
    </Dashboard>
  );
};

// Export the Profile page component
export default ProfilePage;
