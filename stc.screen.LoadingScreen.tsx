import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";

export default function LoadingScreen() {
  return (
    <View style={globalStyles.container}>
      <Icon name="hourglass-empty" size={60} color={colors.primary} />
      <Text style={globalStyles.title}>جاري التحميل ⏳</Text>
      <Text style={styles.text}>
        يرجى الانتظار قليلاً ريثما يتم تنفيذ العملية المطلوبة...
      </Text>
      <ActivityIndicator size="large" color={colors.secondary} style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.text,
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20
  }
});
