import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SettingScreen from '../Screens/SettingScreens/SettingScreen';
import SettingAccountScreen from '../Screens/SettingScreens/SettingAccountScreen';
import SettingPasswordScreen from '../Screens/SettingScreens/SettingPasswordScreen';

const Stack = createNativeStackNavigator();
const StackNavigator= () => (
<Stack.Navigator>
	<Stack.Screen name='settingScreen' component={SettingScreen}
	options={{
		headerShown:false
	}} />
	<Stack.Screen name='account' component={SettingAccountScreen} />
	<Stack.Screen name='password' component={SettingPasswordScreen} />	
</Stack.Navigator>
)
function SettingNavigation() {
  return (
	<StackNavigator/>
  )
}

export default SettingNavigation