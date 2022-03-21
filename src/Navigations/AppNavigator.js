import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../Screens/DashboardScreen";
import FeedScreen from "../Screens/FeedScreen";
import SettingNavigation from "./SettingNavigation";
import InboxScreen from "../Screens/InboxScreen";

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      options={{
        activeBackgroundColor: "#ffd600",
        activeTintColor: "#eee",
        inactiveBackgroundColor: "#eee",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="DashboardScreen " component={DashboardScreen} />
      <Tab.Screen name="FeedScreen " component={FeedScreen} />
      <Tab.Screen name="Inbox " component={InboxScreen} />
      <Tab.Screen name="setting " component={SettingNavigation} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
