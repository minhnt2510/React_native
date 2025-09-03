import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Hinh1() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.title}>GROW{"\n"}YOUR BUSINESS</Text>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 6,
    borderColor: "#000",
    marginBottom: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40,
    color: "#000",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
});
