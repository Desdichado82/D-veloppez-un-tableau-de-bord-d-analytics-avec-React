export const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: 'Sacha',
      lastName: 'Foley',
      age: 28,
    },
    todayScore: 0.15,
    keyData: {
      calorieCount: 2000,
      proteinCount: 120,
      carbohydrateCount: 250,
      lipidCount: 80,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Ellie',
      lastName: 'Mournier',
      age: 25,
    },
    score: 0.25,
    keyData: {
      calorieCount: 1800,
      proteinCount: 100,
      carbohydrateCount: 180,
      lipidCount: 60,
    },
  },
];

export const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      { day: '2020-08-01', kilogram: 75, calories: 200 },
      { day: '2020-08-02', kilogram: 74, calories: 220 },
      { day: '2020-08-03', kilogram: 76, calories: 250 },
      { day: '2020-08-04', kilogram: 75, calories: 180 },
      { day: '2020-08-05', kilogram: 74, calories: 190 },
      { day: '2020-08-06', kilogram: 75, calories: 210 },
      { day: '2020-08-07', kilogram: 73, calories: 220 },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: '2020-08-01', kilogram: 63, calories: 180 },
      { day: '2020-08-02', kilogram: 62, calories: 200 },
      { day: '2020-08-03', kilogram: 64, calories: 220 },
      { day: '2020-08-04', kilogram: 63, calories: 160 },
      { day: '2020-08-05', kilogram: 62, calories: 170 },
      { day: '2020-08-06', kilogram: 63, calories: 190 },
      { day: '2020-08-07', kilogram: 61, calories: 200 },
    ],
  },
];

export const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      { day: 1, sessionLength: 35 },
      { day: 2, sessionLength: 40 },
      { day: 3, sessionLength: 30 },
      { day: 4, sessionLength: 45 },
      { day: 5, sessionLength: 0 },
      { day: 6, sessionLength: 0 },
      { day: 7, sessionLength: 50 },
    ],
  },
  {
    userId: 18,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 35 },
      { day: 3, sessionLength: 25 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 35 },
      { day: 7, sessionLength: 45 },
    ],
  },
];

export const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 90, kind: 1 },
      { value: 110, kind: 2 },
      { value: 130, kind: 3 },
      { value: 60, kind: 4 },
      { value: 180, kind: 5 },
      { value: 100, kind: 6 },
    ],
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      { value: 120, kind: 1 },
      { value: 140, kind: 2 },
      { value: 70, kind: 3 },
      { value: 70, kind: 4 },
      { value: 200, kind: 5 },
      { value: 110, kind: 6 },
    ],
  },
];

export default {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};


  

  