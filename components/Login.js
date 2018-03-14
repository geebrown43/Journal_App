import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get("window");
export default class Login extends React.Component {
  state = {
    modalVisible: true
  };
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
                <TextInput/>
            </View>

        </View>
        <View style={styles.modalContainer}>
            <Text style={styles.inputFields}>Password</Text>
            <View style={styles.modalInput}>
                <TextInput />
            </View>
        </View>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text>Login</Text>
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
    backgroundColor: 'yellow',
    width: width / 2,
    margin: 10
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'black'
  },
  button: {
      borderColor: 'black',
      borderWidth: 1
  },
  inputFields:{
      fontFamily: 'londrina',
      fontSize: 26
  }
});
