// app/add.tsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TaskRepository } from "../lib/db/TaskRepository";

export default function Add() {
  const router = useRouter();
  const { name } = useLocalSearchParams<{ name?: string }>();
  const [text, setText] = useState("");

  const onFinish = async () => {
    await TaskRepository.add(text);
    setText("");
    router.replace({ pathname: "/home", params: { name } });
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>ADD YOUR JOB</Text>
      <TextInput
        placeholder="input your job"
        value={text}
        onChangeText={setText}
        style={s.input}
        onSubmitEditing={onFinish}
      />
      <TouchableOpacity style={s.primary} onPress={onFinish}>
        <Text style={s.primaryText}>FINISH →</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "800", marginTop: 8, marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ddd", borderRadius: 10, padding: 12, marginBottom: 16 },
  primary: { backgroundColor: "#00BDD6", paddingVertical: 12, borderRadius: 10, alignItems: "center" },
  primaryText: { color: "#fff", fontWeight: "700" },
});
