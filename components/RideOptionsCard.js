import { FlatList, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
	{
		id: 'Uber-X-123',
		title: 'Uber-X',
		muliplier: 1,
		image: 'https://links.papareact.com/3pn'
	},
	{
		id: 'Uber-X-456',
		title: 'Uber-XPriority',
		muliplier: 1.2,
		image: 'https://links.papareact.com/5w8'
	},
	{
		id: 'Uber-X-789',
		title: 'Comfort',
		muliplier: 1.75,
		image: 'https://links.papareact.com/7pf'
	}
];
const RideOptionsCard = () => {
	const navigation = useNavigation();
	const [ selected, setSelected ] = useState(null);
	return (
		<SafeAreaView style={tw`bg-white flex-grow`}>
			<View>
				<TouchableOpacity
					style={tw`absolute top-3 left-5 rounded-full p-3 `}
					onPress={() => navigation.navigate('NavigateCard')}
				/>
				<Text style={tw`text-center py-5 text-xl`}>Select A Ride</Text>
			</View>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item: { title, muliplier, image } }) => (
					<TouchableOpacity
						style={tw`flex-row items-center justify-between px-10`}
						// onPress={() => setSelected(item)}
					>
						<Image
							style={{
								width: 100,
								height: 100,
								resizeMode: 'contain'
							}}
							source={{ uri: image }}
						/>
						<View style={tw`-ml-6`}>
							<Text style={tw`text-xl font-semibold`}>{title}</Text>
							<Text style={tw`font-semibold`}>
								21:06 <Text style={tw`text-red-600`}>*</Text>8 min away
							</Text>
						</View>
						<Text style={tw` text-xl`}>GHS 90</Text>
					</TouchableOpacity>
				)}
			/>
			<View>
				<TouchableOpacity style={tw`bg-black py-3 m-3`}>
					<Text style={tw` text-white text-center text-xl `}>Choose Car</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
