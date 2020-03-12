import commonConstants from "../constants/common.constants";

type commonState = {
  json: object | undefined;
};

const commonState = (
  state: commonState = {
    json: undefined
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
