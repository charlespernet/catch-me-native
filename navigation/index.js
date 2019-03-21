import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import OtherScreen from '../screens/OtherScreen';

// These 2 can be removed later once actual routing is done
import { Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
          title: 'Choisir une ligne',
      }
    },
    Other: {
      screen: OtherScreen,
      navigationOptions: {
          title: 'Autre écran',
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

export const Drawer = createDrawerNavigator({ 
  MainStack: { 
    screen: MainStack,
    navigationOptions: {
      title: 'Application principale',
    }
  },
  Login: {
    screen: () => {
      return (
        <SafeAreaView>
          <Text>Recherche</Text>
        </SafeAreaView>
      )
    }
  }
});

export const AppStack = createStackNavigator({
  Drawer: { screen: Drawer }
}, { headerMode: 'none' } );

export const AppContainer = createAppContainer(AppStack);