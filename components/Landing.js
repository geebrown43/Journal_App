import React from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'


const {width, height} = Dimensions.get('window')

export default class Landing extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.brand}>
                    <Text style={styles.label}>My</Text>
                    <Text style={styles.label}>Journal</Text>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Enter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
        fontSize: width / 7 
    },
    button:{
        borderColor: 'black',
        borderWidth: 2,
        marginTop: 10,
        width: width / 3,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: width / 20,
        padding: 5        
    }
})