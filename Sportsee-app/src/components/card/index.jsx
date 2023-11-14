import styled from 'styled-components';

const CardWrapper = styled.div`
  background: #FBFBFB;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 124px;
`;

const UserDataLabel = styled.h4`
  margin-bottom: 8px;
`;

const UserDataValue = styled.p`
  margin: 0;
`;


const Card = ({ keyData }) => {
    if (!keyData) {
      return null; // Return early if keyData is not available
    }
  
    const renderCards = () => {
      return Object.entries(keyData).map(([key, value]) => {
        // Remove "Count" from the key name
        const keyName = key.replace('Count', 's');

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






