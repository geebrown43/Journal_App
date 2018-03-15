import React from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground} from 'react-native'


const {width, height} = Dimensions.get('window')

export default class Landing extends React.Component {
    render(){
        return(
            <ImageBackground source={require('../assets/images/Journal.png')} style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.brand}>
                    <Text style={styles.label}>My</Text>
                    <Text style={styles.label}>Journal</Text>
                    <TouchableOpacity onPress={this.props._login}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Enter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    brand: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label:{
        fontSize: width / 5,
        fontFamily: 'londrina' 
    },
    button:{
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 20,
        width: width / 3,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: width / 17,
        fontFamily: 'londrina',
        padding: 5        
    }
})