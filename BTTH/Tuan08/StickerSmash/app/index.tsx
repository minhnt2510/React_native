import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = { title: "#8353E2", primary: "#00BDD6", text: "#222", border: "#E6E6E6" };

export default function Index() {
  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.h1}>MANAGE YOUR{"\n"}TASK</Text>

        <View style={{ width: "80%", marginTop: 24 }}>
          <TextInput
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#9AA0A6"
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.btn, { backgroundColor: COLORS.primary }]}
          onPress={() => router.push(`/tasks?name=${name}`)}
          disabled={!name.trim()}
        >
          <Text style={styles.btnText}>GET STARTED ➜</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  h1: { textAlign: "center", color: COLORS.title, fontSize: 28, fontWeight: "800", letterSpacing: 1 },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
  },
  btn: { marginTop: 24, paddingVertical: 12, paddingHorizontal: 22, borderRadius: 999 },
  btnText: { color: "#fff", fontWeight: "700", letterSpacing: 0.5 },
});
