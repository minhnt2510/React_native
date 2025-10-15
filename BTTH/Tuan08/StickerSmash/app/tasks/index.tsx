import React, { useMemo, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useTasks } from "../context/TasksContext";
import TaskItem from "../components/TaskItem";

const COLORS = { primary: "#00BDD6", border: "#E6E6E6" };

export default function Tasks() {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const [q, setQ] = useState("");
  const { tasks, toggleTask, removeTask } = useTasks();

  const filtered = useMemo(
    () => tasks.filter((t) => t.title.toLowerCase().includes(q.toLowerCase())),
    [tasks, q]
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back}>
          <Feather name="chevron-left" size={22} />
        </TouchableOpacity>
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontWeight: "700" }}>Hi {name?.trim() || "Twinkle"}</Text>
          <Text style={{ color: "#6B7280", fontSize: 12 }}>Have a great day ahead</Text>
        </View>
      </View>

      {/* search */}
      <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
        <View style={styles.searchBar}>
          <Feather name="search" size={16} color="#9AA0A6" />
          <TextInput
            placeholder="Search"
            value={q}
            onChangeText={setQ}
            style={{ flex: 1, marginLeft: 8 }}
            placeholderTextColor="#9AA0A6"
          />
        </View>
      </View>

      {/* list */}
      <FlatList
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={() => toggleTask(item.id)}
            onDelete={() => removeTask(item.id)}
            onEdit={() => router.push({ pathname: "/tasks/add", params: { editId: item.id, title: item.title } })}
          />
        )}
      />

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={() => router.push("/tasks/add")}>
        <Feather name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingTop: 6, paddingBottom: 10 },
  back: { padding: 6, borderRadius: 10, backgroundColor: "#F3F4F6" },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",
    right: 18,
    bottom: 28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
});
