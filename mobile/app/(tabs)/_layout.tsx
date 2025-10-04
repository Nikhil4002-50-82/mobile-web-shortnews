import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "index", headerShown: false }}
      />
      <Tabs.Screen
        name="explore"
        options={{ title: "explore", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;
