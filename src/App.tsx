import React from "react";

import { Dispatch, AnyAction, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { commonActions } from "./store/actions/common.actions";
import { IAppState } from "./store/reducers";

import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { StylesProvider } from "@material-ui/core/styles";

import LogoUp from "./img/up.png";
import LogoDown from "./img/down.png";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      refreshData: () => commonActions.refreshData()
    },
    dispatch
  );

const mapStateToProps = (state: IAppState): IAppState => {
  return {
    commonState: state.commonState
  };
};

class App extends React.Component<ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>> {
  componentDidMount() {
    this.props.refreshData();
  }
  render() {
    return this.props.commonState.json !== undefined ? (
      <StylesProvider injectFirst>
        <Header title={"DASHBOARD"} logoUp={LogoUp} logoDown={LogoDown} isUp={true} />
        <Dashboard json={this.props.commonState.json} />
      </StylesProvider>
    ) : null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
