import * as Types from "../constants/ActionTypes";

export const actGetWorks = (work) => {
  return {
    type: Types.GET_WORK,
    work,
  };
};
