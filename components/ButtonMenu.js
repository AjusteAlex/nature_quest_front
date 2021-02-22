import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonMenu ({ onPress }) {
    return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Menu
                    </Text>
                </View>     
            </TouchableOpacity>
            
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:14,
        backgroundColor:'#498EAC',
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
        color:'white',
        textAlign:'center',
    },
  
  
  });