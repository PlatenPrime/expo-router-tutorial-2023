import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appearance, useColorScheme } from 'react-native';


const index = () => {

	let colorScheme = useColorScheme();


	return (
		<SafeAreaProvider>
			<View>
				<Text>My App

					

				</Text>
			</View>
		</SafeAreaProvider>
	)
}

export default index