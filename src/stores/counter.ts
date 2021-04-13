import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  // name of the store
  // it is used in devtools and allows restoring state
  id: "counter",
  // a function that returns a fresh state
  state: () => ({
    data: { counter: 0, name: "Eduardo" }, // Object
    foo: [1, 2, 3], // Array
    bar: "test", // Generic
  }),
  // optional getters
  getters: {
    doubleCount() {
      console.info(this.data);
      console.info(this.foo);
      console.info(this.bar);
      return this.data.counter * 2;
    },
    // use getters in other getters
    doubleCountPlusOne() {
      return this.doubleCount * 2;
    },
  },
  // optional actions
  actions: {
    add() {
      this.data.counter += 1;
    },
    reset() {
      // `this` is the store instance
      this.data.counter = 0;
    },
  },
});
