// This file contains the format functions for each component that needs to format the data


  
  // This function formats the data for the DailyActivities component
  export function formatDailyActivitiesData(data) {
    // Check if the data object has a sessions property that is an array
    if (data && data.data.sessions && Array.isArray(data.data.sessions)) {
      // Map the sessions array to a new array with the expected format
      const reformattedData = data.data.sessions.map((session, index) => ({
        day: (index + 1).toString(), // Convert index to a sequential day
        kilogram: session.kilogram,
        calories: session.calories,
      }));
      // Return the formatted data array
      console.log('this is the activity data returned', reformattedData);
      return reformattedData;
    } else {
      // Throw an error if the data format is incorrect
      throw new Error('Data format is incorrect:', data);
    }
  }
  
  // This function formats the data for the AverageSessionDuration component
  export function formatAverageSessionDurationData(data) {
    // Check if the data object has a sessions property that is an array
    const jourMap = {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D',
      };
    if (data && data.data.sessions && Array.isArray(data.data.sessions)) {
    
      // Map the sessions array to a new array with the expected format
      const reformattedData = data.data.sessions.map((session) => ({
        day: jourMap[session.day], // Map numeric day to French day
        sessionLength: session.sessionLength, // Keep the session length as it is
      }));
      // Return the formatted data array
      return reformattedData;
    } else {
      // Throw an error if the data format is incorrect
      throw new Error('Data format is incorrect:', data);
    }
  }
  
  // This function formats the data for the UserPerformanceRadarChart component
  export function formatUserPerformanceRadarChartData(data) {
    const kindMap = {
        cardio: 'cardio',
        energy: 'énergie',
        endurance: 'endurance',
        strength: 'force',
        speed: 'vitesse',
        intensity: 'intensité',
      };
    // Check if the data object has a data property that is an array and a kind property that is an array
    if (data && data.data && Array.isArray(data.data.data)) {
    
      // Map the data array to a new array with the expected format
      
      const reformattedData = data.data.data.map((item) => ({
        kind: kindMap[data.data.kind[item.kind]], // Map kind to its corresponding French word
        value: item.value,
      }));
      // Return the formatted data array
      console.log('this is the radar reformatted',reformattedData);
      return reformattedData;
    } else {
      // Throw an error if the data format is incorrect
      throw new Error('Data format is incorrect:', data);
    }
  }
  
  // This function formats the data for the ScoreChart component
  export function formatScoreChartData(data) {
    // Check if the data object has a score or a todayScore property that is a number
    if (data && (data.score || data.todayScore)) {
      // Get the user score from the data object
      // Assuming todayScore is a percentage value between 0 and 1
      const userScore = data.score ?? data.todayScore;
  
      // Convert the percentage to a whole number
      let todayScoreWholeNumber;
      if (userScore !== 0.3) {
        todayScoreWholeNumber = userScore * 100;
      } else {
        todayScoreWholeNumber = userScore * 10;
      }
  
      // Check if todayScorePercentage is a valid number
      if (typeof todayScoreWholeNumber !== 'number' || isNaN(todayScoreWholeNumber)) {
        // Throw an error if the percentage value is invalid
        throw new Error(`Invalid percentage value for todayScore:`, todayScoreWholeNumber);
      }
  
      // Create an array with the expected format for the chart
      const formattedData = [
        { value: 100, fill: '#fff', innerRadius: 0 }, // White inner circle
        { value: todayScoreWholeNumber, fill: 'red', borderRadius: 5 }, // Actual data (adjust the fill color as needed)
      ];
  
      // Return the formatted data array
      return formattedData;
    } else {
      // Throw an error if the data format is incorrect
      throw new Error('Data format is incorrect:', data);
    }
  }
  