import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import useAuthentication from "./src/Api/useAuthentication";

import WelcomeNavigator from "./src/Navigations/WelcomeNavigator";
import AppNavigator from "./src/Navigations/AppNavigator";

const newColorTheme = {
  brand: {
    900: "#ffd600",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

export default function App() {
  const user = useAuthentication();
  console.log("user=", user);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        {!user ? <WelcomeNavigator /> : <AppNavigator />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
