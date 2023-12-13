import PropTypes from 'prop-types';
import '@fontsource/roboto';

function Greeting({ data }) {
  console.log('this is the greeting data', data);

  // Check if the data prop is in the expected format
  if (data) {
    // Get the user's first name from the data prop
    const firstName = data.data.userInfos.firstName;

    // Display the greeting message with the user's first name
    return (
      <div>
        <h1>
          Bonjour, <span style={{ color: '#FF0101' }}>{firstName}</span>
        </h1>
        <span>Félicitations! Vous avez explosé vos objectifs hier 👏</span>
      </div>
    );
  } else {
    console.error('Data format is incorrect:', data);
    return null;
  }
}

Greeting.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      userInfos: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        // Add other expected properties here
      }).isRequired,
      // Add other expected properties here
    }).isRequired,
  }),
};

export default Greeting;




