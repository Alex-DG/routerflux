import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

const GrayScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress={() => Actions.pop()}>
        Gray Screen
      </Text>
      <Text style={styles.welcome} onPress={() => Actions.gray2()}>
        To Gray 2 Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
  }
});

export default GrayScreen;
