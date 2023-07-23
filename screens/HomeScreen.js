import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import NavFavorites from '../components/NavFavorites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navReducer';

const HomeScreen = () => {
	const dispatch = useDispatch();
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{ width: 100, height: 100, resizeMode: 'contain' }}
					source={{ uri: 'https://links.papareact.com/gzs' }}
				/>
				<GooglePlacesAutocomplete
					styles={{
						container: {
							flex: 0
						},
						textInput: {
							fontSize: 18
						}
					}}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description
							})
						);
						dispatch(setDestination(null));
					}}
					returnKeyType={'search'}
					fetchDetails={true}
					enablePoweredByContainer={false}
					minLength={2}
					query={{
						key: '',
						language: 'en'
					}}
					placeholder="Where to?"
					nearbyPlacesApi="GooglePlacesSearch"
					debounce={400}
				/>
				<NavOptions />
				<NavFavorites />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
