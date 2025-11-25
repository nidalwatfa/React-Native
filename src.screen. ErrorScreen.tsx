import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function ErrorScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Icon name="error-outline" size={70} color="red" />
      <Text style={globalStyles.title}>حدث خطأ ❌</Text>
      <Text style={styles.text}>
        عذرًا، حدثت مشكلة أثناء تحميل البيانات أو تنفيذ العملية.
      </Text>

      <Button
        title="🔄 إعادة المحاولة"
        color={colors.secondary}
        onPress={() => navigation.navigate("Splash")}
      />

      <Button
        title="🏠 العودة إلى الرئيسية"
        color={colors.primary}
        onPress={() => navigation.navigate("Home")}
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
