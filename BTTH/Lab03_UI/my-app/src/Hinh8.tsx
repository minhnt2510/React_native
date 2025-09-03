import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function Hinh8() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#3f51b5" />
        <TextInput
          style={styles.input}
          placeholder="Please input user name"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#3f51b5" />
        <TextInput
          style={styles.input}
          placeholder="Please input password"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Other Login Methods</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#29b6f6" }]}
        >
          <Ionicons name="person-add" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#ff9800" }]}
        >
          <Ionicons name="wifi" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.socialBtn, { backgroundColor: "#3b5998" }]}
        >
          <FontAwesome name="facebook" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 8,
    marginBottom: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  loginButton: {
    backgroundColor: "#3f51b5",
    paddingVertical: 12,
    borderRadius: 4,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 15,
  },
  link: {
    color: "#3f51b5",
    fontSize: 14,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#555",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
