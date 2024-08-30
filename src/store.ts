import create from "zustand";
import immer from "immer";

export const useStore = create(
  immer((set, get) => ({
    count1: 0,
    count2: 10,
    obj: {
      name: "张三",
      age: 18,
    },
    increment1: () => set((state) => ({ count1: state.count1 + 1 })),
    increment2: () => set((state) => ({ count2: state.count2 + 1 })),
    increaseAge: () =>
      set((state) => {
        state.obj.age++;
      }),
    increaseAge1: () => {
      const obj = get().obj;
      obj.age++;
    },
  })),
);
