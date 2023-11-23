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

// This function fetches user data from a specific endpoint.
export async function fetchUserData(userId) {
  // Define the endpoint URL.
  const endpoint = `http://localhost:3000/user/${userId}`;
  // Fetch data from the endpoint and return it.
  return fetchDataFromEndpoint(endpoint);
}

// This function fetches user activity data from a specific endpoint.
export async function fetchUserActivity(userId) {
  // Define the endpoint URL.
  const endpoint = `http://localhost:3000/user/${userId}/activity`;
  // Fetch data from the endpoint and return it.
  return fetchDataFromEndpoint(endpoint);
}

// This function fetches user session data from a specific endpoint.
export async function fetchUserSession(userId) {
  // Define the endpoint URL.
  const endpoint = `http://localhost:3000/user/${userId}/average-sessions`;
  // Fetch data from the endpoint and return it.
  return fetchDataFromEndpoint(endpoint);
}

// This function fetches user performance data from a specific endpoint.
export async function fetchUserPerformance(userId) {
  // Define the endpoint URL.
  const endpoint = `http://localhost:3000/user/${userId}/performance`;
  // Fetch data from the endpoint and return it.
  return fetchDataFromEndpoint(endpoint);
}

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
