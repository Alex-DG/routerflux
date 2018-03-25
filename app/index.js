import React, { Component } from "react";
import { Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import ScarletScreen from "./screens/ScarletScreen";
import GrayScreen from "./screens/GrayScreen";
import Gray2Screen from "./screens/Gray2Screen";

import BlueScreen from "./screens/BlueScreen";
import BlackScreen from "./screens/BlackScreen";
import GoldScreen from "./screens/GoldScreen";
import MaizeScreen from "./screens/MaizeScreen";

const TabIcon = ({ selected, title }) => {
  return <Text style={{ color: selected ? "red" : "black" }}>{title}</Text>;
};

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: "#FFFFFF" }}
        >
          <Scene key="osu" title="OSU" icon={TabIcon}>
            <Scene key="scarlet" component={ScarletScreen} title="Scarlet" />
            <Scene key="gray" component={GrayScreen} title="Gray" />
            <Scene key="gray2" component={Gray2Screen} title="Gray2" />
          </Scene>

          <Scene key="um" title="UM" icon={TabIcon}>
            <Scene key="blue" component={BlueScreen} title="Blue" />
            <Scene key="maize" component={MaizeScreen} title="Maize" />
          </Scene>

          <Scene key="vu" title="VU" icon={TabIcon}>
            <Scene key="gold" component={GoldScreen} title="Gold" />
            <Scene key="black" component={BlackScreen} title="Black" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
