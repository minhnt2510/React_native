import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Hinh4() {
  return (
    <LinearGradient colors={["#E0F7FA", "#00CFFF"]} style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subtitle}>VERIFICATION</Text>
      <Text style={styles.description}>
        Enter ontime password sent on {"\n"} +84902605798
      </Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
    color: "#000",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  otpInput: {
    width: 40,
    height: 45,
    borderWidth: 1,
    borderColor: "#000",
    marginHorizontal: 5,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFC107",
    paddingVertical: 12,
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
