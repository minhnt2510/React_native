import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { useTasks } from "../context/TasksContext";

const COLORS = { title: "#222", primary: "#00BDD6", border: "#E6E6E6" };

export default function AddTask() {
  const { editId, title } = useLocalSearchParams<{ editId?: string; title?: string }>();
  const editing = !!editId;
  const [val, setVal] = useState(title ?? "");
  const { addTask, updateTask } = useTasks();

  useEffect(() => {
    if (title) setVal(String(title));
  }, [title]);

  const onFinish = () => {
    const t = val.trim();
    if (!t) return;
    if (editing && editId) updateTask(editId, t);
    else addTask(t);
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
        <Text style={styles.heading}>ADD YOUR JOB</Text>

        <TextInput
          placeholder="input your job"
          value={val}
          onChangeText={setVal}
          style={styles.input}
          placeholderTextColor="#9AA0A6"
        />

        <TouchableOpacity activeOpacity={0.85} style={styles.btn} onPress={onFinish}>
          <Text style={styles.btnText}>{editing ? "UPDATE" : "FINISH ➜"}</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* ảnh minh hoạ tùy bạn thay */}
        <Image
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Notepad_icon.svg/512px-Notepad_icon.svg.png",
          }}
          style={{ width: 160, height: 160, opacity: 0.8 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 20, fontWeight: "800", color: COLORS.title, marginTop: 8, marginBottom: 12 },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
  },
  btn: {
    marginTop: 16,
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "700", letterSpacing: 0.4 },
});
