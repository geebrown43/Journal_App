import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  ImageBackground
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
      <ImageBackground source={require('../assets/images/Journal.png')} style={{ flex: 1 }}>
        <LoginScreen modalVisible={this.state.modalVisible} _successLogin={this.props._successLogin} />
      </ImageBackground>
    );
  }
}

const LoginScreen = ({ modalVisible, _successLogin }) => (
  <Modal isVisible={modalVisible} onBackdropPress={_successLogin} animationIn='zoomIn'>
    <View style={styles.modalSize}>
      <View style={styles.login}>
        <Text style={{ fontSize: 28, fontFamily: 'londrina' }}>Login</Text>
      </View>
      <View style={styles.hr} />
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
          <Text style={styles.inputFields}>Username</Text>
          <View style={styles.modalInput}>
            <TextInput />
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
        <View style={styles.signUp}>
          <Text style={{ fontSize: 20, fontFamily: 'londrina', margin: 5 }}>No Account ?</Text>
          <TouchableOpacity><Text style={{ fontSize: 20, fontFamily: 'londrina', margin: 5, textDecorationLine: 'underline', textDecorationStyle: 'solid' }}>Sign-Up</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.hr} />
      <View style={styles.close}>
        <TouchableOpacity>
          <Text>CLOSE</Text>
        </TouchableOpacity>
      </View>

    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 226, 86)'

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
    borderWidth: 1
  },
  inputFields: {
    fontFamily: 'londrina',
    fontSize: 26
  },
  hr: {
    borderWidth: 1,
    borderColor: 'black',
    height: 1,
  },
  modalSize: {
    height: height - 200,
    borderRadius: 8,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  close: {
    margin: 15,
    alignItems: 'center'
  },
  login: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  createAccount: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  signUp: {
    flexDirection: 'row',
    marginTop: height / 8
  }
});
