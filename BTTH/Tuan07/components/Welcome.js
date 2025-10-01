import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sub}>
        A premium online store for sporter and their stylish choice
      </Text>

      {/* Khung nền hồng chứa ảnh */}
      <View style={styles.imageBox}>
        <Image source={require("../assets/blue.png")} style={styles.image} />
      </View>

      <Text style={styles.title}>POWER BIKE SHOP</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("ProductList")}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  sub: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 13,
    color: "#333",
  },
  imageBox: {
    backgroundColor: "#fdecef",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  image: { width: 250, height: 200, resizeMode: "contain" },
  title: { fontSize: 20, fontWeight: "bold", marginVertical: 20, textAlign: "center" },
  btn: {
    backgroundColor: "red",
    paddingVertical: 14,
    borderRadius: 30,
    width: "80%",
    alignItems: "center",
    marginTop: 10,
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
