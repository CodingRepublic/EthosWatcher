import { Dispatch } from "redux";

import commonConstants from "../constants/common.constants";

const refreshData = (): any => {
  const success = (newJson: object) => {
    return { type: commonConstants.REFRESH_DATA, payload: newJson };
  };

  return async (dispatch: Dispatch) => {
    fetch(`http://ca25d6.ethosdistro.com/?json=yes`)
      .then(response => response.json())
      .then(json => dispatch(success({ newJson: json })));
  };
};

export const commonActions = {
  refreshData
};
