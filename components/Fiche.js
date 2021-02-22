import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Image } from 'react-native';

import axios from 'axios';

export default function Fiche(props) {

    const [ fiche, setFiche ] = useState(undefined);

    useEffect(function() {
        axios.get(`http://127.0.0.1:8000/fiche/`+ props.id)
        .then(function(response) {
            setFiche(response.data);
        }) 
    }, [props.id]);

    if (fiche === undefined){
        return <View>
        <Text>Loading...</Text>
      </View>
    }


    return (
    
        <View >
            <Text>{fiche.title}</Text>
            <Text>{fiche.subtitle}</Text>
            <Image style={{ 
                width: 51,
                height: 51,
                }} 
                source={fiche.image1} />
            {/* <Image style={styles.img} source={{ uri: fiche.image2 }} />
            <Image style={styles.img} source={{ uri: fiche.image3 }} />
            <Image style={styles.img} source={{ uri: fiche.image4 }} /> */}
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