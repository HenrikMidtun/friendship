import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';

const MainNavigator = createStackNavigator({
	Home:{
		screen: HomeScreen
	},
	Ticket:{
		screen: TicketScreen
	}
});

const app = createAppContainer(MainNavigator);

export default app;
