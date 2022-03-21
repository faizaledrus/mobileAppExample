import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../Screens/WelcomeScreens/WelcomeScreen";
import LoginScreen from "../Screens/WelcomeScreens/LoginScreen";
import SignUpScreen from "../Screens/WelcomeScreens/SignUpScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="welcomeScreen"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
  </Stack.Navigator>
);
function WelcomeNavigator() {
  return <StackNavigator />;
}

export default WelcomeNavigator;
