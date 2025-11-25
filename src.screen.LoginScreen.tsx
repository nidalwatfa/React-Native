import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email && password) {
      // هنا يمكن إضافة منطق التحقق لاحقًا
      navigation.navigate("Dashboard");
    } else {
      alert("يرجى إدخال البريد الإلكتروني وكلمة المرور");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Icon name="login" size={50} color={colors.primary} />
      <Text style={globalStyles.title}>تسجيل الدخول 🔑</Text>

      <TextInput
        style={styles.input}
        placeholder="البريد الإلكتروني"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="كلمة المرور"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="تسجيل الدخول" color={colors.secondary} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#fff"
  }
});
