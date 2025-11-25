import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { globalStyles, colors } from "../styles";

export default function ContactScreen() {
  const email = "support@example.com";
  const phone = "+123456789";

  return (
    <View style={globalStyles.container}>
      <Icon name="contact-mail" size={50} color={colors.primary} />
      <Text style={globalStyles.title}>تواصل معنا 📞</Text>

      <TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)}>
        <Text style={styles.link}>📧 البريد الإلكتروني: {email}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)}>
        <Text style={styles.link}>📱 الهاتف: {phone}</Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        يمكنك التواصل معنا عبر البريد أو الهاتف لأي استفسار أو دعم.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 18,
    color: colors.secondary,
    marginVertical: 10
  },
  note: {
    fontSize: 14,
    color: colors.text,
    marginTop: 20,
    textAlign: "center"
  }
});
