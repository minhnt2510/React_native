// lib/db/TaskRepository.ts
import { Platform } from "react-native";
import * as SQLite from "expo-sqlite";

export type Task = { id: number; name: string; done: number };

export class TaskRepository {
  private static db: SQLite.SQLiteDatabase | null = null;
  private static mem: Task[] = [];             // fallback cho web
  private static useMemory = Platform.OS === "web";

  static async init() {
    if (this.useMemory) return;
    if (!this.db) this.db = SQLite.openDatabaseSync("todo.db");
    await this.db!.execAsync(
      "CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, done INT);"
    );
  }

  static async all(): Promise<Task[]> {
    if (this.useMemory) return [...this.mem];
    return (await this.db!.getAllAsync("SELECT * FROM todos")) as Task[];
  }

  static async add(name: string) {
    if (!name.trim()) return;
    if (this.useMemory) {
      const id = this.mem.length ? Math.max(...this.mem.map(t => t.id)) + 1 : 1;
      this.mem.push({ id, name, done: 0 });
      return;
    }
    await this.db!.runAsync("INSERT INTO todos (name, done) VALUES (?, ?);", name, 0);
  }

  static async toggle(id: number, done: number) {
    if (this.useMemory) {
      this.mem = this.mem.map(t => (t.id === id ? { ...t, done: done ? 0 : 1 } : t));
      return;
    }
    await this.db!.runAsync("UPDATE todos SET done=? WHERE id=?;", done ? 0 : 1, id);
  }

  static async remove(id: number) {
    if (this.useMemory) {
      this.mem = this.mem.filter(t => t.id !== id);
      return;
    }
    await this.db!.runAsync("DELETE FROM todos WHERE id=?;", id);
  }

  // upsert nhiều task (dùng cho sync pull)
  static async upsertMany(tasks: Task[]) {
    for (const t of tasks) {
      if (this.useMemory) {
        const idx = this.mem.findIndex(x => x.id === t.id);
        if (idx >= 0) this.mem[idx] = t; else this.mem.push(t);
      } else {
        await this.db!.runAsync(
          "INSERT INTO todos (id, name, done) VALUES (?, ?, ?) ON CONFLICT(id) DO UPDATE SET name=excluded.name, done=excluded.done;",
          t.id, t.name, t.done
        );
      }
    }
  }
}
