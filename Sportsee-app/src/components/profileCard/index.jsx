import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'material-icons'; // Import the material-icons package

// Styled components for the profile card
const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const UserName = styled.h2`
  margin: 0;
  color: #333;
`;

const UserDescription = styled.p`
  color: #666;
`;




const ProfileCard = ({ data, onClick }) => {
    const handleClick = () => {
      if (onClick) {
        onClick(data.id); // Call the onClick function with the card's ID if provided
      }
    };
  
    return (
      <CardContainer onClick={handleClick}>
        <CardImage src={data.profile} alt="User Avatar" />
        <CardContent>
          <UserName>{data.firstName} {data.lastName}</UserName>
          <UserDescription>{data.age}</UserDescription>
        </CardContent>
      </CardContainer>
    );
  };

  ProfileCard.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    }).isRequired,
    onClick: PropTypes.func,
  };
  
  export default ProfileCard;