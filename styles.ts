import { StyleSheet } from "react-native";

export const colors = {
  primary: "#4CAF50",
  secondary: "#2196F3",
  background: "#F5F5F5",
  text: "#333333"
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 16,
    color: colors.text
  }
});
