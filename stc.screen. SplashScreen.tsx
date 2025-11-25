import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // محاكاة تحميل البيانات أو التهيئة
    const timer = setTimeout(() => {
      navigation.navigate("Login"); // بعد 3 ثواني ينتقل إلى شاشة تسجيل الدخول
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Icon name="flash-on" size={70} color={colors.primary} />
      <Text style={globalStyles.title}>تطبيق React Native Demo ⚡</Text>
      <Text style={styles.text}>جارٍ التحميل...</Text>
      <ActivityIndicator size="large" color={colors.secondary} style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: colors.text,
    marginTop: 10
  }
});
