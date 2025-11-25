import React from "react";
import { View, Text, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function LogoutScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // هنا يمكن إضافة منطق مسح بيانات المستخدم لاحقًا
    alert("تم تسجيل الخروج بنجاح 🚪");
    navigation.navigate("Login");
  };

  return (
    <View style={globalStyles.container}>
      <Icon name="logout" size={60} color={colors.primary} />
      <Text style={globalStyles.title}>تسجيل الخروج</Text>
      <Text style={globalStyles.subtitle}>
        اضغط على الزر أدناه لتسجيل الخروج والعودة إلى شاشة الدخول.
      </Text>

      <Button title="تسجيل الخروج" color={colors.secondary} onPress={handleLogout} />
    </View>
  );
}
