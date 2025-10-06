import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          paddingBottom: 20,
          paddingTop: 10,
          height: 70,
        },
        tabBarIconStyle: {
          marginTop: -5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabelStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" color="white" size={34} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabelStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="manage-accounts" color="white" size={34} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
