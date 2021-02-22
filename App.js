import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Home from './components/Home';
import StartScreen from './components/StartScreen';
import NatureQuestGps from './components/NatureQuestGps';

const MenuTheme = {
  dark: false,
  colors: {
    primary: '#49AC72',
    background: '#A3D05A',
    card: '#ededed',
    text: '#498EAC',
    border: '#F9BA52',
  },
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fermer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (  
    <NavigationContainer theme={MenuTheme}>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="NatureQuest" component={NatureQuestGps} />
      <Drawer.Screen name="StartCourse" component={StartScreen} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuCloseButton: {
    color:'red',
  }
});
