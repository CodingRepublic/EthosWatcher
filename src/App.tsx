import React from "react";

import { Dispatch, AnyAction, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { commonActions } from "./store/actions/common.actions";
import { IAppState } from "./store/reducers";

import { Dashboard } from "./Dashboard";
import { Header } from "./Header";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      toggle: () => commonActions.toggle()
    },
    dispatch
  );

const mapStateToProps = (state: IAppState): IAppState => {
  return {
    commonState: state.commonState
  };
};

class App extends React.Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Dashboard />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);