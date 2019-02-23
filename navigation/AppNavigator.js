
import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';

const MainNavigator = createStackNavigator(
{
	Home:{
		screen: HomeScreen
	},
	Ticket:{
		screen: TicketScreen
	}
},
{
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#000"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#fff",
        zIndex: 1,
        fontSize: 18,
        lineHeight: 23,
        fontFamily: "CircularStd-Bold"
      },
      headerTintColor: "#fff",
      animationEnabled: true
    }
  }
);

const app = createAppContainer(MainNavigator);

export default app;
