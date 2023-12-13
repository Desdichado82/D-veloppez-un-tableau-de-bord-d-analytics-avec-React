// Import necessary React modules and components
import styled from 'styled-components';
import 'material-icons'; // Import the material-icons package
import { useNavigate } from 'react-router-dom';

// Import API service functions for fetching user data
import {
  fetchUserData,
  fetchUserActivity,
  fetchUserSession,
  fetchUserPerformance,
  fetchUserScoreData
} from '/src/services/api.js';

// Import custom components
import GymSlider from '/src/components/gymSlider';
import ProfileCard from '/src/components/profileCard';

// Import React hooks
import { useState, useEffect } from 'react';

// Styled components for styling the Home page
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
`;

const Header = styled.header`
  width: 100%;
  max-width: 1200px;
`;

const MainSection = styled.main`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

// Home page component
const HomePage = () => {
  // React Router hook for navigation
  const navigate = useNavigate();
  // State to store user data
  const [userData, setUserData] = useState([]);

  // useEffect hook to fetch initial user data when the component mounts
  useEffect(() => {
    // Sample user data for demonstration purposes
    const data = [
      {
        id: 12,
        profile: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        firstName: 'Karl',
        lastName: 'Dovineau',
        age: 31,
      },
      {
        id: 18,
        profile: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        firstName: 'Cecilia',
        lastName: 'Ratorez',
        age: 34,
      }
    ];
    // Set the user data in the state
    setUserData(data);
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to handle card click and navigate to the profile page
  const handleCardClick = async (id) => {
    console.log(`Navigating to /profile/${id}`);
    // Call the fetch functions from api.js and pass the id as a parameter
    const userData = await fetchUserData(id);
    const userActivity = await fetchUserActivity(id);
    const userSession = await fetchUserSession(id);
    const userPerformance = await fetchUserPerformance(id);
    const userScore = await fetchUserScoreData(id);
    // Log the fetched data to the console
    console.log('userData:', userData);
    console.log('userActivity:', userActivity);
    console.log('userSession:', userSession);
    console.log('userPerformance:', userPerformance);
    // Navigate to the profile page with the fetched data
    navigate(`/profile/${id}`, { state: { userData, userActivity, userSession, userPerformance, userScore } });
  };

  return (
    <HomeContainer>
      {/* Header section with GymSlider */}
      <Header>
        <GymSlider />
      </Header>

      {/* Main section displaying ProfileCards for each user */}
      <MainSection>
        {userData.map((user) => (
          <ProfileCard key={user.id} data={user} onClick={handleCardClick} />
        ))}
      </MainSection>
    </HomeContainer>
  );
};

// Export the Home page component
export default HomePage;


