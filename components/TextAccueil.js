import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TextAccueil() {
    return (
        <View style={styles.container}>
            <Text style={styles.textAccueil}>Bienvenue</Text>
            <Text style={styles.textAccueil}>choisisez votre type de parcour</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textAccueil: {
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'600',
        marginTop:15,
    },
  
  });