import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appearance, useColorScheme } from 'react-native';
import { Link } from 'expo-router';



const index = () => {

	let colorScheme = useColorScheme();



	return (
		<SafeAreaProvider>
			<View>
				<Text>My App

					<View>
						<Link href='/animation' >Animation</Link>
					</View>


					<View>
						<Link href='/uisand' >UI Sandbox</Link>
					</View>


					<View>
						<Link href='/checkbox' >Checkbox</Link>
					</View>

				</Text>
			</View>
		</SafeAreaProvider>
	)
}

export default index