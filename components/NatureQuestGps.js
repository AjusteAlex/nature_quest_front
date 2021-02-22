import React from 'react';
import { StyleSheet, Text, Button, View, Dimensions } from 'react-native';
import Iframe from 'react-iframe';
import Header from './Header';
import ButtonMenu from './ButtonMenu';
import { WebView } from 'react-native-webview';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default function NatureQuestGps({navigation}) {
    return (
      
        <View style={styles.pageNatureQuest}>
        <View style={styles.headerContainer}>
        <Header/>
        <ButtonMenu color='#49AC72' onPress={()=> navigation.toggleDrawer()} />
        </View>
        <Iframe  url="https://www.google.com/maps/d/embed?mid=11fEhEZiv72kKKy7XbbQ3GIufEcTpWUa2"
        width="400px"
        height="400px"
        display="initial"
        position="relative"/>
        </View>
    
    );
}

// export default function NatureQuestGps() {
//   return (
//     <View style={{ flex: 1, alignItems: 'flex-end' }}>
//       <WebView 
//       // source={{ html: <iframe src="https://www.google.com/maps/d/embed?mid=11fEhEZiv72kKKy7XbbQ3GIufEcTpWUa2" width="640" height="480"></iframe> }}
//       source= {{ uri: 'https://www.google.com/maps/d/embed?mid=11fEhEZiv72kKKy7XbbQ3GIufEcTpWUa2'}}
//       style={styles.webview}
//       javaScriptEnabled={true}
//       domStorageEnabled={true}
//       startInLoadingState={false}
//       scalesPageToFit={true}
//       />
//     </View>
//   );
// }


const styles = StyleSheet.create({
    pageNatureQuest:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
    },
    headerContainer: {
      width:'100%',
      backgroundColor:'#ededed',
      },

    webview: {
      flex: 1,
      backgroundColor: 'yellow',
      width: deviceWidth,
      height: deviceHeight
    }
  });