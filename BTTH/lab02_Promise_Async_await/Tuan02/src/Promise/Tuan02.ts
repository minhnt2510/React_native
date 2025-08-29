// 1. Promise trả về "Hello Async" sau 2s
const p1: Promise<string> = new Promise((resolve) => {
  setTimeout(() => resolve("Hello Async"), 2000);
});
p1.then((kq: string) => console.log("Bài 1:", kq));

// 2. Arrow function trả về 10 sau 1s
const getNumber = (): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 1000);
  });
};
getNumber().then((kq: number) => console.log("Bài 2:", kq));

// 3. Arrow function reject sau 1s
const failTask = (): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Có lỗi xảy ra"), 1000);
  });
};
failTask().catch((err: string) => console.log("Bài 3:", err));

// 4. Promise random number
new Promise<number>((resolve) => {
  const num: number = Math.random();
  resolve(num);
})
  .then((n: number) => console.log("Bài 4: Số ngẫu nhiên =", n.toFixed(3)))
  .catch((err: any) => console.error("Bài 4 lỗi:", err));

// 5. simulateTask arrow function
const simulateTask = (time: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Nhiệm vụ hoàn thành sau ${time}ms`), time);
  });
};

// 6. Promise.all
Promise.all([simulateTask(1000), simulateTask(1500), simulateTask(2000)]).then(
  (res: string[]) => console.log("Bài 6:", res)
);

// 7. Promise.race
Promise.race([simulateTask(1000), simulateTask(1500), simulateTask(2000)]).then(
  (res: string) => console.log("Bài 7:", res)
);

// 8. Promise chain
Promise.resolve(2)
  .then((n: number) => n * n)
  .then((n: number) => n * 2)
  .then((n: number) => n + 5)
  .then((res: number) => console.log("Bài 8:", res));

// 9. Promise lọc số chẵn
const arr: number[] = [1, 2, 3, 4, 5, 6];
new Promise<number[]>((resolve) => {
  setTimeout(() => resolve(arr.filter((x: number) => x % 2 === 0)), 1000);
}).then((res: number[]) => console.log("Bài 9: Các số chẵn =", res));

// 10. .finally()
simulateTask(1000)
  .then((res: string) => console.log("Bài 10:", res))
  .catch((err: any) => console.error("Bài 10 lỗi:", err))
  .finally(() => console.log("Bài 10: Kết thúc"));
