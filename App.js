import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo'
import Landing from './components/Landing'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentDidMount(){
    await Font.loadAsync({
      londrina : require('./assets/fonts/LondrinaSolid-Regular.ttf')
    })
    this.setState({fontLoaded: true})
  }
  render() {
    return (
      <View style={{flex: 1, top: 20}}>
        {this.state.fontLoaded ? <Landing /> : null}
      </View>
    );
  }
}


