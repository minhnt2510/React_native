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

export default function Hinh5() {
  return (
    <LinearGradient colors={["#E8F5E9", "#C8E6C9"]} style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.passwordInput}
        />
        <Ionicons
          name="eye-outline"
          size={22}
          color="#000"
          style={styles.eyeIcon}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>When you agree to terms and conditions</Text>
      <Text style={styles.forgot}>For got your password?</Text>
      <Text style={styles.orText}>Or login with</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: "#3b5998" }]}
        >
          <Text style={styles.socialText}>f</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialButton, { backgroundColor: "#2196F3" }]}
        >
          <Text style={styles.socialText}>Z</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.socialButton,
            { backgroundColor: "#fff", borderWidth: 1 },
          ]}
        >
          <Text style={[styles.socialText, { color: "#DB4437" }]}>G</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#000",
  },
  input: {
    backgroundColor: "#E0F2F1",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0F2F1",
    borderRadius: 6,
    marginBottom: 20,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 14,
  },
  eyeIcon: {
    marginLeft: 5,
  },
  loginButton: {
    backgroundColor: "#D84315",
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  terms: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5,
    color: "#000",
  },
  forgot: {
    fontSize: 13,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    fontSize: 13,
    marginBottom: 10,
    color: "#000",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 50,
  },
  socialButton: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  socialText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});
