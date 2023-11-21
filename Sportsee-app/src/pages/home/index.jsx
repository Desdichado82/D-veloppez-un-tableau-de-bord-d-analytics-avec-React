import styled from 'styled-components';
import 'material-icons'; // Import the material-icons package
import { useNavigate } from 'react-router-dom';
import GymSlider from '/src/components/gymSlider'; // Adjust the path based on your project structure
import ProfileCard from '/src/components/profileCard'; // Adjust the path based on your project structure

import  { useState, useEffect } from 'react';


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




const HomePage = ()=>{

    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    

    useEffect(() => {
      // Set user data when the component mounts
      const data = [
        {
            id: 12,
            profile: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' ,
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
            
          
            
        },
        {
            id: 18,
            profile: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' ,
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
            
           
        }
    ]
      setUserData(data);
    }, []); //

    const handleCardClick = (id) => {
        console.log(`Navigating to /profile/${id}`);
        navigate(`/profile/${id}`);
      };
  
    return (
        <HomeContainer>
        <Header>
          <GymSlider />
        </Header>
        <MainSection>
          {/* Display ProfileCard for each user */}
          {userData.map((user) => (
            <ProfileCard key={user.id} data={user}  onClick={handleCardClick} />
          ))}
        </MainSection>
      </HomeContainer>
    );
  };

export default HomePage;

