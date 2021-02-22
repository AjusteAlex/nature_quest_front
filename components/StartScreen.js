import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonBackHome from './ButtonBackHome';
import Course from './Course';
import Fiche from './Fiche';
import Header from './Header';

export default function StartScreen ({navigation}) {

    const [ idFiche, setIdFiche ] = useState(undefined);
    const [ idCourse, setIdCourse ] = useState(1);
    
    return (
        <View style={styles.container}>
          <Header/>
        <ButtonBackHome
        text="Retour a l'accueil"
        onPress={() => navigation.navigate('Home')}
      />
  
        {idCourse !== undefined &&
        <Course id={idCourse} setId={setIdCourse} setIdFiche={setIdFiche} />
        }
  
        {idFiche !== undefined &&
        <Fiche id={idFiche} setId={setIdFiche} />
        }

          </View>
      );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "darkseagreen",
    },
  
  });