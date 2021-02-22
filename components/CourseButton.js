import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CourseButton ({ text, onPress }) {
    return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{ text }</Text>
                </View>     
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:250,
        padding:10,
        margin:10,
        borderRadius:15,
        backgroundColor:'#49AC72',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        

    },

    buttonText: {
        width:100,
        color:'white',
        textAlign:'center',
    },
  
  
  });