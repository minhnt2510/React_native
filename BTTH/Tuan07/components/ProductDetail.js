import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductDetail() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/red.png")} style={styles.img} />
      <Text style={styles.name}>Pina Mountain</Text>
      <Text style={styles.sale}>15% OFF 1350$</Text>
      <Text style={styles.price}>449$</Text>
      <Text style={styles.descTitle}>Description</Text>
      <Text style={styles.desc}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Add to card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
   { flex: 1, padding: 20, backgroundColor: "#fff" },
  img:
   { width: "100%", height: 200, resizeMode: "contain", marginBottom: 20 },
  name: 
  { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  sale: 
  { color: "red", fontWeight: "bold", marginBottom: 3 },
  price: 
  { fontSize: 18, textDecorationLine: "line-through", marginBottom: 15 },
  descTitle: { fontSize: 16, fontWeight: "600", marginBottom: 5 },
  desc:
   { color: "#555", marginBottom: 20 },
  btn: 
  { backgroundColor: "red", padding: 14, borderRadius: 30, alignItems: "center" },
  btnText: { color: "#fff", fontSize: 16 },
});
