import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Icon name="emoji-emotions" size={60} color={colors.primary} />
      <Text style={globalStyles.title}>أهلاً وسهلاً 🎉</Text>
      <Text style={styles.text}>
        لقد سجلت الدخول بنجاح، نتمنى لك تجربة رائعة مع التطبيق.
      </Text>

      <Button
        title="اذهب إلى لوحة التحكم"
        color={colors.secondary}
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.text,
    marginVertical: 15,
    textAlign: "center",
    paddingHorizontal: 20
  }
});
