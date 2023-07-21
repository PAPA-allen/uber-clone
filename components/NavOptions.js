import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const data = [
	{
		id: '123',
		title: 'Get A Ride',
		image: 'https://links.papareact.com/3pn',
		screen: 'MapScreen'
	},
	{
		id: '456',
		title: 'Order Food',
		image: 'https://links.papareact.com/28w',
		screen: 'EatsScreen'
	}
];

const NavOptions = () => {
	return (
		<FlatList
			data={data}
			horizontal
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-3 w-40`}>
					<View>
						<Image
							style={{ width: 120, height: 120, resizeMode: 'contain' }}
							source={{ uri: item.image }}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;

const styles = StyleSheet.create({});
