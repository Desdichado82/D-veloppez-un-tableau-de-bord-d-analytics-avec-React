export async function fetchDataFromEndpoint(endpoint) {
 
  
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Usage example for fetchUserData:
export async function fetchUserData(userId) {
  const endpoint = `http://localhost:3000/user/${userId}`;
  return fetchDataFromEndpoint(endpoint);
}

// Usage example for fetchUserActivity:
export async function fetchUserActivity(userId) {
  const endpoint = `http://localhost:3000/user/${userId}/activity`;
  return fetchDataFromEndpoint(endpoint);
}

// Usage example for fetchUserSession:
export async function fetchUserSession(userId) {
  const endpoint = `http://localhost:3000/user/${userId}/average-sessions`;
  return fetchDataFromEndpoint(endpoint);
}

// Usage example for fetchUserSession:
export async function fetchUserPerformance(userId) {
  const endpoint = `http://localhost:3000/user/${userId}/performance`;
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

