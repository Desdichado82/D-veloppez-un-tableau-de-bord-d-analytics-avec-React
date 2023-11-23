import { useState, useEffect } from 'react';
import { fetchUserData } from '/src/services/api.js';
import  '@fontsource/roboto';

function Greeting({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData(userId)
      .then((data) => {
      
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  return (
    <div>
      {userData ? (
        <h1>Bonjour, <span style={{ color: '#FF0101' }}>{userData.data.userInfos.firstName}</span></h1>
      ) : (
        <p>Loading user data...</p>
      )}

      <span>Félicitations! Vous avez explosé vos objectifs hier 👏</span>
    </div>
  );
}

export default Greeting;



