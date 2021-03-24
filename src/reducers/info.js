// import * as Types from "../constants/ActionTypes";

let initialState = {
  works: [
    {
      school: "Le Quy Don High School For Gifted",
      country: "Viet Nam",
      GPA: "8.5/10",
      Graduation_Year: "2018",
    },
    {
      school: "University Of Science",
      country: "Viet Nam",
      GPA: "8.5/10",
      Graduation_Year: "2022",
    },
  ],
  awards: {
    nation: [
      {
        prize: "Third Prize",
        name:
          "English Olympiad For Non-English Major Students National Showdown",
        year: "2018",
      },
      {
        prize: "First Prize",
        name:
          "English Olympiad For English Major Students - E4US of Video Round",
        year: "2019",
      },
    ],
    region: [
      {
        prize: "ConsolationPrize",
        name: "AI Solution For Ho Chi Minh City",
        year: "2020",
      },
      {
        prize: "First Prize",
        name:
          "English Olympiad For Non-English Major Students Southern Showdown",
        year: "2018",
      },
    ],
  },
};

const info = (state = initialState, action) => {
  switch (action.type) {
    // case Types.GET_WORK:
    //   return state.works;
    // case Types.GET_AWARD:
    //   return state.awards;
    default:
      return state;
  }
};

export default info;
