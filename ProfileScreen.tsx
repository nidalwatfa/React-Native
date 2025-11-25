
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Icon name="person" size={50} color="#2196F3" />
      <Text style={styles.text}>هذه شاشة الملف الشخصي 👤</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20
  }
});
