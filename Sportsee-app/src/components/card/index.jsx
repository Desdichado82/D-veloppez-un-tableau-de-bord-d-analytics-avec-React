import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFire, faDrumstickBite, faAppleWhole, faBurger } from '@fortawesome/free-solid-svg-icons';

library.add(faFire, faDrumstickBite, faAppleWhole, faBurger);




const CardWrapper = styled.div`
  display:flex;
  justify-content:start;
  align-items:center;
  background: #FBFBFB;
  gap:1rem;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 124px;
`;

const UserDataLabel = styled.p`
  margin-bottom: 8px;
  color:#74798C;
`;

const UserDataValue = styled.h4`
  margin: 0;
`;

const IconWrapper = styled.span`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getIconAndColor = (key) => {
  switch (key.toLowerCase()) {
    case 'calories':
      return { icon: faFire, color: '#FF0000', backgroundColor: 'rgba(255, 0, 0, 0.1)' };
    case 'proteins':
      return { icon: faDrumstickBite, color: '#4AB8FF', backgroundColor: 'rgba(74, 184, 255, 0.1)' };
    case 'carbohydrates':
      return { icon: faAppleWhole, color: '#F9CE23', backgroundColor: 'rgba(249, 206, 35, 0.1)' };
    case 'lipids':
      return { icon: faBurger, color: '#FD5181', backgroundColor: 'rgba(253, 81, 129, 0.1)' };
    default:
      return { icon: null, color: 'black', backgroundColor: 'transparent' };
  }
};


const Card = ({ keyData }) => {
    if (!keyData) {
      return null; // Return early if keyData is not available
    }
  
    const renderCards = () => {
      return Object.entries(keyData).map(([key, value]) => {
        // Remove "Count" from the key name
        const keyName = key.replace('Count', 's');
        const { icon, color, backgroundColor } = getIconAndColor(keyName);
        console.log('Icon:', icon); // Add this line

        const getMeasurementText = (key) => {
            switch (key.toLowerCase()) {
              case 'calories':
                return 'kCal';
              default:
                return 'g';
            }
        };

   
        
        return (
            <CardWrapper  key={key} >
              <IconWrapper style={{ backgroundColor }}>
            {icon && <FontAwesomeIcon icon={icon} style={{ color }} />}
          </IconWrapper>
                <div>
                    <UserDataValue>{value}{getMeasurementText(keyName)}</UserDataValue>
                    <UserDataLabel>{keyName}</UserDataLabel>
                
                </div>
            </CardWrapper>
         
           
         
        );
      });
    };
  
    return renderCards();
  };

  export default Card;






