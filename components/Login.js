import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from "react-native";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");
export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalVisible: true
        }
    }

  componentDidMount(){
    this._loadInitalState().done()
  }

  _loadInitalState = async () => {
      let value = await AsyncStorage.getItem('user')
      console.log(value)
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen modalVisible={this.state.modalVisible} _successLogin={this.props._successLogin}/> 
      </View>
    );
  }
}

const LoginScreen = ({ modalVisible, _successLogin }) => (
    <Modal isVisible={modalVisible} onBackdropPress = {_successLogin}>
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
            <Text style={styles.inputFields}>Username</Text>
            <View style={styles.modalInput}>
                <TextInput style={{fontSize: 20}}/>
            </View>

        </View>
        <View style={styles.modalContainer}>
            <Text style={styles.inputFields}>Password</Text>
            <View style={styles.modalInput}>
                <TextInput style={{fontSize: 20}}/>
            </View>
        </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
            </TouchableOpacity>
      </View>
    </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    height: height - 200,
    backgroundColor: "white",
    borderRadius:8,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  modalContainer: {
    width: width / 2,
    margin: 10
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'black',
    height: 30
  },
  button: {
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 6,
      width: width / 4,
      alignItems: 'center',
      margin: 10
  },
  inputFields:{
      fontFamily: 'londrina',
      fontSize: 26,
  },
  buttonText:{
      fontSize: 18,
      fontFamily: 'londrina',
      padding: 5
  }
});
