import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Hinh6() {
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState<"Male" | "Female" | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Birthday" />

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setGender("Male")}
        >
          <View style={[styles.radio, gender === "Male" && styles.radioSelected]} />
          <Text style={styles.radioText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.radioRow}
          onPress={() => setGender("Female")}
        >
          <View style={[styles.radio, gender === "Female" && styles.radioSelected]} />
          <Text style={styles.radioText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>When you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f5e9",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#d7e7d7",
    padding: 12,
    borderRadius: 4,
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#d7e7d7",
    paddingHorizontal: 12,
    borderRadius: 4,
    marginBottom: 12,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#333",
    marginRight: 6,
  },
  radioSelected: {
    backgroundColor: "#333",
  },
  radioText: {
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: "#d84315",
    padding: 14,
    borderRadius: 4,
    alignItems: "center",
    marginBottom: 12,
  },
  registerText: {
    color: "#fff",
    fontWeight: "bold",
  },
  terms: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 6,
  },
});
