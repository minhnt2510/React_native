import type { Task } from "../db/TaskRepository";

export class MockCloud {
  private static cloud: Task[] = [
    { id: 101, name: "To check email", done: 0 },
    { id: 102, name: "UI task web page", done: 0 },
  ];

  static async pull(): Promise<Task[]> {
    await new Promise(r => setTimeout(r, 500));
    return JSON.parse(JSON.stringify(this.cloud));
  }

  static async push(tasks: Task[]): Promise<void> {
    await new Promise(r => setTimeout(r, 500));
    this.cloud = JSON.parse(JSON.stringify(tasks));
  }
}
