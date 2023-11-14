import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { fetchUserData } from '../../services/api';
import Card from '/src/components/card';

const KeyUserData = ({ userId }) => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Fetch user data using the API
      fetchUserData(userId)
        .then((data) => {
          if (data && data.data && data.data.keyData) {
            setUserData(data.data.keyData);
          } else {
            console.error('Data format is incorrect:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }, [userId]);
  
    return (
      <div>
       
        <Card keyData={userData} />
      </div>
    );
  };
  
  export default KeyUserData;




