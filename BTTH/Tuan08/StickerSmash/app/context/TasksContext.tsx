import React, { createContext, useContext, useMemo, useState } from "react";

export type Task = { id: string; title: string; done: boolean };

type Ctx = {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
};

const TasksCtx = createContext<Ctx | null>(null);

const seed = [
  "To check email",
  "UI task web page",
  "Learn javascript basic",
  "Learn HTML Advance",
  "Medical App UI",
  "Learn Java",
].map((t, i) => ({ id: String(i + 1), title: t, done: i === 0 }));

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(seed);

  const api: Ctx = useMemo(
    () => ({
      tasks,
      addTask: (title) => setTasks((s) => [{ id: Date.now().toString(), title, done: false }, ...s]),
      updateTask: (id, title) => setTasks((s) => s.map((t) => (t.id === id ? { ...t, title } : t))),
      toggleTask: (id) => setTasks((s) => s.map((t) => (t.id === id ? { ...t, done: !t.done } : t))),
      removeTask: (id) => setTasks((s) => s.filter((t) => t.id !== id)),
    }),
    [tasks]
  );

  return <TasksCtx.Provider value={api}>{children}</TasksCtx.Provider>;
}

export const useTasks = () => {
  const ctx = useContext(TasksCtx);
  if (!ctx) throw new Error("useTasks must be used within TasksProvider");
  return ctx;
};
