import React from "react";
import { View, Text, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>اختبار سريع</Text>
      <Button title="اضغط هنا" onPress={() => Alert.alert("الزر يعمل ✅")} />
    </View>
  );
}
