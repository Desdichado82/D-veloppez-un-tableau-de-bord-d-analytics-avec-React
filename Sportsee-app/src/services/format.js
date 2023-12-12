 export class DailyActivities {
  formatData(data) {
    if (data && data.data.sessions && Array.isArray(data.data.sessions)) {
      const reformattedData = data.data.sessions.map((session, index) => ({
        day: (index + 1).toString(),
        kilogram: session.kilogram,
        calories: session.calories,
      }));
      console.log('this is the activity data returned', reformattedData);
      return reformattedData;
    } else {
      throw new Error('Data format is incorrect:', data);
    }
  }
}

export class AverageSessionDuration {
  formatData(data) {
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
      const reformattedData = data.data.sessions.map((session) => ({
        day: jourMap[session.day],
        sessionLength: session.sessionLength,
      }));
      return reformattedData;
    } else {
      throw new Error('Data format is incorrect:', data);
    }
  }
}

export class UserPerformanceRadarChart {
  formatData(data) {
    const kindMap = {
      cardio: 'cardio',
      energy: 'énergie',
      endurance: 'endurance',
      strength: 'force',
      speed: 'vitesse',
      intensity: 'intensité',
    };
    if (data && data.data && Array.isArray(data.data.data)) {
      const reformattedData = data.data.data.map((item) => ({
        kind: kindMap[data.data.kind[item.kind]],
        value: item.value,
      }));
      console.log('this is the radar reformatted',reformattedData);
      return reformattedData;
    } else {
      throw new Error('Data format is incorrect:', data);
    }
  }
}

export class ScoreChart {
  formatData(data) {
    if (data && (data.data.score || data.data.todayScore)) {
      const userScore = data.data.score ?? data.data.todayScore;
      let todayScoreWholeNumber;
      if (userScore !== 0.3) {
        todayScoreWholeNumber = userScore * 100;
      } else {
        todayScoreWholeNumber = userScore * 10;
      }
      if (typeof todayScoreWholeNumber !== 'number' || isNaN(todayScoreWholeNumber)) {
        throw new Error(`Invalid percentage value for todayScore:`, todayScoreWholeNumber);
      }
      const formattedData = [
        { value: 100, fill: '#fff', innerRadius: 0 },
        { value: todayScoreWholeNumber, fill: 'red', borderRadius: 5 },
      ];
      console.log('this is the scoreChart data', formattedData);
      return formattedData;
    } else {
      throw new Error('Data format is incorrect:', data);
    }
  }
}
