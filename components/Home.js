import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Header from './Header';
import { LinearGradient } from 'expo-linear-gradient';
import TextAccueil from './TextAccueil';
import ButtonAdult from './ButtonAdult';
import ButtonMenu from './ButtonMenu';
import ButtonKid from './ButtonKid';



export default function Home ({navigation}) {
    
    return (
        <View style={styles.container}>
          <LinearGradient
        // Background Linear Gradient
        colors={['#A3D05A','#49AC72']}
        style={styles.background}>

          <View style={styles.headerContainer}>
            <Header />
            <ButtonMenu color='#49AC72' onPress={()=> navigation.toggleDrawer()} />
          </View>
          <TextAccueil/>
          <View style={styles.logoContainer}>    
          <Image style={styles.logo} source={require('../assets/logo-naturschool.png')} />
          </View>
          <View style={styles.buttonContainer}>
          <ButtonAdult text='Adulte' onPress={() => navigation.navigate('StartCourse', { screen: 'StartScreen'})}/>
          <ButtonKid text='Enfant' onPress={() => navigation.navigate('StartCourse', { screen: 'StartScreen'})}/>
          </View>
          </LinearGradient>
        </View>  
      );

}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      flexDirection:'column',
      justifyContent:'center',
      backgroundColor: 'white',
    },
    headerContainer: {
      width:'100%',
      backgroundColor:'#ededed',
    },

    logoContainer: {
      alignItems:'center',
      width:'80%',
      height:'45%',
      borderWidth:30,
      marginTop:30,
      borderColor:'#A3D05A',
      overflow:'hidden',
      borderRadius:250,
      backgroundColor:'white',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24,
      
      
    },

    background: {
      flex:1,
      alignItems:'center',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height:'100%',
    },

    logo: {
      width:'76%',
      height:'95%',
      backgroundColor:'white',
      resizeMode:'contain',

      
    },
    buttonContainer:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',

    },
    
  
  });