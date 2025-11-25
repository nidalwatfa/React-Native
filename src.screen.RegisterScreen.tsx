import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    if (name && email && password) {
      // هنا يمكن إضافة منطق حفظ الحساب لاحقًا
      alert("تم إنشاء الحساب بنجاح ✅");
      navigation.navigate("Login");
    } else {
      alert("يرجى إدخال جميع البيانات المطلوبة");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Icon name="person-add" size={50} color={colors.primary} />
      <Text style={globalStyles.title}>إنشاء حساب جديد 📝</Text>

      <TextInput
        style={styles.input}
        placeholder="الاسم الكامل"
        value={name}
        onChangeText={setName}
      />

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

      <Button title="تسجيل" color={colors.secondary} onPress={handleRegister} />
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
