import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
import { connect } from "react-redux";
import { fetchsmurfs, addSmurf } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    console.log("mounted");
    this.props.fetchsmurfs();
  }

  render() {
    return (
      <div className="App">
        <header className="headerbar">
          <h1>**SMURF**</h1>
          <div className="nav">
            <NavLink to="/">Smurf List</NavLink>
            <NavLink to="/smurf-form">Add Smurf</NavLink>
          </div>
        </header>

        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm {...props} addSmurf={this.props.addSmurf} />
          )}
        />
        {this.props.fetchingSmurfs ? (
          <Route
            exact
            path="/"
            render={() => (
              <Smurfs
                getSmurfList={this.props.fetchsmurfs}
                smurfs={this.props.smurfs}
              />
            )}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { fetchsmurfs, addSmurf }
)(App);
