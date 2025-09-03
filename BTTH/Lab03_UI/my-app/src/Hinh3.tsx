import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Hinh3() {
  return (
    <LinearGradient colors={["#E0F7FA", "#00CFFF"]} style={styles.container}>
      <Ionicons
        name="lock-closed"
        size={100}
        color="black"
        style={{ marginBottom: 30 }}
      />
      <Text style={styles.title}>FORGET{"\n"}PASSWORD</Text>
      <Text style={styles.subtitle}>
        Provide your account's email for which you want to reset your password
      </Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={20}
          color="gray"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#666"
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
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
    color: "#000",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
    height: 45,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  button: {
    backgroundColor: "#FFC107",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#000",
  },
});
