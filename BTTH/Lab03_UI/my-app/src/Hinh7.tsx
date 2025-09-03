import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Hinh7() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="black" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Name" />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.createAccount}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdd835",  
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fbc02d",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  createAccount: {
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
