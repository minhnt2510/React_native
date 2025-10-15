import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TasksProvider } from "../app/context/TasksContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <TasksProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </TasksProvider>
    </SafeAreaProvider>
  );
}
