// Import your mock data
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockData.js';

// This function fetches data from a given endpoint using the Fetch API.
export async function fetchDataFromEndpoint(endpoint) {
  try {
    // Fetch data from the endpoint.
    const response = await fetch(endpoint);

    // If the response is not ok (status in the range 200-299), throw an error.
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the response as JSON.
    const data = await response.json();

    // Return the parsed data.
    return data;
  } catch (error) {
    // Log any errors to the console.
    console.error('Error fetching data:', error);
    // Re-throw the error to be caught and handled by the calling code.
    throw error;
  }
}

export async function fetchUserData(userId) {
  const stringUserId = String(userId); // Convert userId to string
  // Try to fetch data from the endpoint first
  try {
    const endpoint = `http://localhost:3000/user/${stringUserId}`;
    return await fetchDataFromEndpoint(endpoint);
  } catch (error) {
    // If the endpoint fails, fetch data from the mock data
    return fetchMockUserData(stringUserId);
  }
}



// This function fetches user activity data from either the API endpoint or mock data.
export async function fetchUserActivity(userId) {
  const stringUserId = String(userId); // Convert userId to string
  
  try {
    // Fetch data from the API endpoint
    const endpoint = `http://localhost:3000/user/${stringUserId}/activity`;
    return await fetchDataFromEndpoint(endpoint);
  } catch(error) {
    // Fetch mock data
    return fetchMockUserActivity (stringUserId);
  }
  
}

// This function fetches user session data from either the API endpoint or mock data.
export async function fetchUserSession(userId) {
  const stringUserId = String(userId); // Convert userId to string
  try{
    // Fetch data from the API endpoint
    const endpoint = `http://localhost:3000/user/${stringUserId}/average-sessions`;
    return await fetchDataFromEndpoint(endpoint);
  } catch(error) {
    // Fetch mock data
    return fetchMockUserSession(stringUserId);
  }
}

// This function fetches user performance data from either the API endpoint or mock data.
export async function fetchUserPerformance(userId) {
  const stringUserId = String(userId); // Convert userId to string
  try {
    // Fetch data from the API endpoint
    const endpoint = `http://localhost:3000/user/${stringUserId}/performance`;
    return await fetchDataFromEndpoint(endpoint);
  } catch(error) {
    // Fetch mock data
    return fetchMockUserPerformance(stringUserId);
  }
}


const fetchMockUserData = (userId) => {
  const userIndex = USER_MAIN_DATA.findIndex((user) => user.id === Number(userId));

  if (userIndex !== -1) {
    const userData = USER_MAIN_DATA[userIndex];

    return {
      data: {
        ...userData, // Include all properties from USER_MAIN_DATA
        userId: userData.id,  // Map id to userId
      },
    };
  }

  throw new Error('User not found in mock data');
};

const fetchMockUserActivity = (userId) => {
  const userIndex = USER_ACTIVITY.findIndex((user) => user.userId === Number(userId));
  console.log('this is the userIndex:', userIndex);

  if (userIndex !== -1) {
    const userActivity = USER_ACTIVITY[userIndex];
    console.log('this is the userActivity:', userActivity);
    return {
      data: {
        ...userActivity, // Spread the properties of the selected userActivity
        userId: userActivity.userId,
      },
    };
  }

  throw new Error('User not found in mock data');
};

const fetchMockUserSession = (userId) => {
  const userIndex = USER_AVERAGE_SESSIONS.findIndex((user) => user.userId === Number(userId));

  if (userIndex !== -1) {
    const userSession = USER_AVERAGE_SESSIONS[userIndex];

    return {
      data: {
        ...userSession,
        userId: userSession.userId,
      },
    };
  }

  throw new Error('User not found in mock data');
};

const fetchMockUserPerformance = (userId) => {
  const userIndex = USER_PERFORMANCE.findIndex((user) => user.userId === Number(userId));

  if (userIndex !== -1) {
    const userPerformance = USER_PERFORMANCE[userIndex];

    return {
      data: {
        ...userPerformance,
        userId: userPerformance.userId,
      },
    };
  }

  throw new Error('User not found in mock data');
};


/*
 // Define the userId based on your route or user selection
  const { id } = useParams();
  const userId = id 

*/


/* 
// Function to fetch user activity data
export const fetchUserActivity = (userId) => {
  return new Promise((resolve) => {
    // Simulate an API call with a delay
    setTimeout(() => {
      // Find the user's activity data based on the userId
      const userActivity = mockUserActivity.find((data) => data.userId === userId);
      resolve(userActivity); // Use the imported mockUserActivity
    }, 1000);
  });
};

// Function to fetch user performance data
export const fetchUserPerformance = (userId) => {
  return new Promise((resolve) => {
    // Simulate an API call with a delay
    setTimeout(() => {
      // Find the user's performance data based on the userId
      const userPerformance = mockUserPerformance.find((data) => data.userId === userId);
      resolve(userPerformance); // Use the imported mockUserPerformance
    }, 1000);
  });
};

*/


/*
Each function uses the fetchDataFromEndpoint function to fetch data from a specific endpoint. 
The endpoint URL is constructed using the userId parameter.
 The fetched data is returned as a promise that resolves with the data. 
 If an error occurs during the fetch operation, it is logged to the console and re-thrown to be handled by the calling code. 
 This allows the calling code to handle errors in a way that is appropriate for its context. The fetchDataFromEndpoint function is a reusable function that can be used to fetch data from any endpoint. 
 The other functions are examples of how to use this function to fetch specific types of data. Each function is exported so that it can be imported and used in other modules.
*/
