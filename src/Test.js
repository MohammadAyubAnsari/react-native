import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Test = () => {
  return (
    <View>
      <Text style={{ color: "red" }}>Test Components 1</Text>
      <Text style={styles.h1}>Test Components 2</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
