import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';
import tw from 'twrnc';

const data = [
	{
		id: '123',
		icon: 'home',
		location: 'Home',
		destination: 'Santase, Kumasi'
	},
	{
		id: '456',
		icon: 'briefcase',
		location: 'Work',
		destination: 'Community 25, Tema'
	}
];
const NavFavorites = () => {
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => <View style={[ tw`bg-gray-300`, { height: 0.5 } ]} />}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity style={tw`flex-row items-center p-3 mt-4`}>
					<Icon style={tw`mr-4 rounded-full bg-gray-300 p-3`} name={icon} type="ionicon" size={18} />
					<View>
						<Text style={tw`font-semibold text-lg`}>{location}</Text>
						<Text style={tw`text-gray-600 `}>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavFavorites;

const styles = StyleSheet.create({});
