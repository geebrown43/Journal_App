import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Font } from "expo";
import Landing from "./components/Landing";
import Login from "./components/Login";

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    loginPage: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      londrina: require("./assets/fonts/LondrinaSolid-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  _login = () => {
    this.setState({ fontLoaded: false, loginPage: true });
  };

  _successLogin = () => {
    this.setState({ loginPage: false });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.fontLoaded ? <Landing _login={this._login} /> : null}
        {this.state.loginPage ? <Login _successLogin={this._successLogin} /> : null}
      </View>
    );
  }
}
