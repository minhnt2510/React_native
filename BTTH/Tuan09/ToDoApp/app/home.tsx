// app/home.tsx
import { useEffect, useMemo, useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { TaskRepository, Task } from "../lib/db/TaskRepository";
import { MockCloud } from "../lib/sync/MockCloud";

export default function Home() {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const router = useRouter();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    (async () => {
      await TaskRepository.init();
      await reload();
    })();
  }, []);

  const reload = async () => setTasks(await TaskRepository.all());

  const filtered = useMemo(
    () => tasks.filter(t => t.name.toLowerCase().includes(query.toLowerCase())),
    [tasks, query]
  );

  const toggle = async (t: Task) => {
    await TaskRepository.toggle(t.id, t.done);
    await reload();
  };

  const remove = async (t: Task) => {
    await TaskRepository.remove(t.id);
    await reload();
  };

  const syncNow = async () => {
    const cloud = await MockCloud.pull();
    await TaskRepository.upsertMany(cloud);
    const local = await TaskRepository.all();
    await MockCloud.push(local);
    await reload();
  };

  const Header = () => (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ fontSize: 18, fontWeight: "700" }}>Hi {name || "Twinkle"}</Text>
      <Text style={{ color: "#777" }}>Have a great day ahead</Text>
    </View>
  );

  const Item = ({ item }: { item: Task }) => (
    <View style={[st.card, item.done ? st.done : st.todo]}>
      <Text
        style={[
          st.taskText,
          item.done ? { textDecorationLine: "line-through", color: "#666" } : {},
        ]}
      >
        {item.name}
      </Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity onPress={() => toggle(item)}>
          <Text style={st.btn}>{item.done ? "↩" : "✓"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => remove(item)}>
          <Text style={[st.btn, { color: "red" }]}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={st.container}>
      <Header />
      <TextInput
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
        style={st.search}
      />

      <FlatList
        data={filtered}
        keyExtractor={(i) => String(i.id)}
        renderItem={({ item }) => <Item item={item} />}
        ListEmptyComponent={<Text style={{ color: "#888", marginTop: 16 }}>No tasks</Text>}
      />

      <View style={st.footerRow}>
        <TouchableOpacity style={st.syncBtn} onPress={syncNow}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>SYNC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={st.fab} onPress={() => router.push({ pathname: "/add", params: { name } })}>
          <Text style={{ color: "#fff", fontSize: 26, lineHeight: 26 }}>＋</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const st = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F7F7F7" },
  search: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#e5e5e5", borderRadius: 10, padding: 12, marginBottom: 12 },
  card: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    backgroundColor: "#fff", borderRadius: 14, padding: 12, marginVertical: 6, elevation: 2
  },
  todo: { backgroundColor: "#fff" },
  done: { backgroundColor: "#E8F5E9" },
  taskText: { fontSize: 16, color: "#111" },
  btn: { fontSize: 18 },
  footerRow: { position: "absolute", bottom: 24, left: 16, right: 16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  syncBtn: { backgroundColor: "#6C63FF", paddingVertical: 12, paddingHorizontal: 18, borderRadius: 10 },
  fab: { backgroundColor: "#00BDD6", width: 56, height: 56, borderRadius: 28, justifyContent: "center", alignItems: "center" },
});
