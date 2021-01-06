import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './components/TransactionScreen';
import SearchScreen from './components/SearchScreen';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {
    screen: TransactionScreen,
  },
  Search: {
    screen: SearchScreen,
  },
 },{
   defaultNavigationOptions:({navigation}) => ({
     tabBarIcon:() => {
       const routeName = navigation.state.routeName
       if(routeName === "Transaction"){
         return(
           <Image source = {require("./assets/book.png")} style = {{width:40, height:40}}/>
         )
       }else if(routeName === "Search"){
         return(
           <Image source = {require("./assets/searchingbook.png")} style = {{width:40, height:40}}/>
         )
     }}}
   ) 
   }
 )


const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
