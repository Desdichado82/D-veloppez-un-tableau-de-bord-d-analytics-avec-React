import PropTypes from 'prop-types';
import Card from '/src/components/card';

const KeyUserData = ({ data }) => {
  // Check if the data prop is in the expected format
  if (data && data.data.keyData && typeof data.data.keyData === 'object') {
    // Pass the keyData object to the Card component
    return (
      <div>
        <Card keyData={data.data.keyData} />
      </div>
    );
  } else {
    console.error('Data format is incorrect:', data);
    return null;
  }
};

KeyUserData.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.shape({
      keyData: PropTypes.object.isRequired,
      // Add other expected properties here
    }).isRequired,
  }),
};

export default KeyUserData;
