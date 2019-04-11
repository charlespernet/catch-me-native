import React from 'react';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen';
import LineShow from '../screens/LineShow';
import StopShow from '../screens/StopShow';

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
    LineShow: {
      screen: LineShow,
      navigationOptions: ({ navigation }) => {
        const lineId = navigation.getParam('lineId');
        return {
          title: `${lineId} - Direction`,
        }
      }
    },
    StopShow: {
      screen: StopShow,
      // This can be simplified to classic
      navigationOptions: ({ navigation }) => {
        const stopId = navigation.getParam('stopId');
        return {
          title: `Vue de l'arret ${stopId}`,
        }
      }
    },
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
        <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
          <Text>Could be login or anything</Text>
        </SafeAreaView>
      )
    }
  }
});

export const AppStack = createStackNavigator({
  Drawer: { screen: Drawer }
}, { headerMode: 'none' });

export const AppContainer = createAppContainer(AppStack);