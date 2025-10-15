import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import type { Task } from "../context/TasksContext";

const COLORS = { chip: "#F3F4F6", icon: "#9AA0A6", ok: "#00BDD6", danger: "#EF4444" };

export default function TaskItem({
  task,
  onToggle,
  onEdit,
  onDelete,
}: {
  task: Task;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onToggle} style={styles.check}>
        <Feather name={task.done ? "check-square" : "square"} size={20} />
      </TouchableOpacity>

      <Text style={[styles.title, task.done && { textDecorationLine: "line-through", opacity: 0.6 }]}>
        {task.title}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onDelete} style={styles.iconBtn}>
          <Feather name="trash-2" size={16} color={COLORS.danger} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit} style={styles.iconBtn}>
          <Feather name="edit-2" size={16} color={COLORS.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    marginBottom: 10,
  },
  check: { marginRight: 8 },
  title: { flex: 1, fontSize: 14, fontWeight: "500" },
  actions: { flexDirection: "row", gap: 6, marginLeft: 8 },
  iconBtn: { backgroundColor: COLORS.chip, padding: 6, borderRadius: 8 },
});
