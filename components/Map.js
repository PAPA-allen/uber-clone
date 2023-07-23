import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navReducer';

const Map = () => {
	const origin = useSelector(selectOrigin);
	return (
		<MapView
			style={tw`flex-1`}
			mapType="mutedStandard"
			initialRegion={{
				latitude: 37.78825, //origin.location.lat
				longitude: -122.4324, //origin.location.long
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421
			}}
		>
			<Marker />
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
