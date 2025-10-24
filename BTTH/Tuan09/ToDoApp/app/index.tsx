// app/index.tsx
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function Welcome() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <View style={s.container}>
      <Image style={{ width: 140, height: 140, marginBottom: 24 }} />
      <Text style={s.title}>MANAGE YOUR TASK</Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={s.input}
      />

      <TouchableOpacity
        style={s.primary}
        onPress={() => router.push({ pathname: "/home", params: { name } })}
      >
        <Text style={s.primaryText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#6C63FF",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  primary: {
    backgroundColor: "#00BDD6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  primaryText: { color: "#fff", fontWeight: "700" },
});
