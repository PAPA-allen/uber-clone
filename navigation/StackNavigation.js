import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import EatsScreen from '../screens/EatsScreen';

const StackNavigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
				<Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
				<Stack.Screen name="EatsScreen" component={EatsScreen} options={{ headerShown: true }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigation;
