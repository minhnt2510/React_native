import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Hinh2() {
  return (
    <LinearGradient colors={["#E0F7FA", "#00CFFF"]} style={styles.container}>
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
      <Text style={styles.link}>HOW WE WORK?</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 40,
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
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#FFC107", // vàng
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
  link: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});
