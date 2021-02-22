import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Header () {
    
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
            <Text style={styles.title}>NaturSchool</Text>
            </View>
          </View>
      );

}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ededed',

    },

    titleContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
    },
    title: { 
        fontSize:40,
        color:'#49AC72',
        fontWeight:"500",
        
    },

});