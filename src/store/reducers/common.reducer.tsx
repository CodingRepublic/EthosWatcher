import commonConstants from "../constants/common.constants";

type commonState = {
  json: object;
};

const commonState = (
  state: commonState = {
    json: {}
  },
  action: any
): commonState => {
  switch (action.type) {
    case commonConstants.REFRESH_DATA:
      return {
        ...state,
        json: action.payload.newJson
      };
    default:
      return {
        ...state
      };
  }
};

export { commonState };
