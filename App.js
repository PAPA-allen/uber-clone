import { KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigation from './navigation/StackNavigation';
import tw from 'twrnc';

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={tw`flex-1`}>
					<StackNavigation />
				</KeyboardAvoidingView>
			</SafeAreaProvider>
		</Provider>
	);
}
