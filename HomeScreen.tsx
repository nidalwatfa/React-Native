
import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Icon name="home" size={50} color={colors.primary} />
      <Text style={globalStyles.title}>مرحبًا بك في الشاشة الرئيسية 🎉</Text>
      <Button
        title="اذهب إلى الملف الشخصي"
        color={colors.secondary}
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
