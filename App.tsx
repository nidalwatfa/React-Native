
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحباً بك في التطبيق</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("بدأنا التعلم!")}
      >
        <Text style={styles.buttonText}>ابدأ التعلم مجاناً</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => Alert.alert("شاهد المقدمة الآن")}
      >
        <Text style={styles.buttonOutlineText}>شاهد المقدمة</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonOutline: {
    borderColor: "#007bff",
    borderWidth: 2,
    padding: 15,
    borderRadius: 8,
  },
  buttonOutlineText: {
    color: "#007bff",
    fontSize: 16,
  },
});
