import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from '@rneui/themed';

const NavigateCard = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center text-xl py-5`}>Goodmorning, Papa</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						placeholder="Where to?"
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
						styles={toInputBoxStyles}
						onPress={(data, details = null) => {
							console.log(data);
							navigation.navigate('RideOptionsCard');
						}}
					/>
				</View>
				<NavFavorites />
			</View>
			<View style={tw`flex flex-row justify-evenly py-2 mt-auto border-t border-gray-100`}>
				<TouchableOpacity
					style={tw`flex flex-row bg-black justify-between w-27 px-4 py-3 rounded-full `}
					onPress={() => navigation.navigate('RideOptionsCard')}
				>
					<Icon name="car" type="font-awesome" size={16} color="white" />
					<Text style={tw`text-white text-center mx-2`}>Get Ride</Text>
				</TouchableOpacity>
				<TouchableOpacity style={tw`flex flex-row  justify-between w-23 px-4 py-3 rounded-full`}>
					<Icon name="fast-food-outline" type="ionicon" size={16} color="black" />
					<Text style={tw`text-center`}>Eats</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 20,
		flex: 0
	},
	textInput: {
		backgroundColor: '#DDDDDF',
		borderRadius: 10,
		fontSize: 18
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0
	}
});
