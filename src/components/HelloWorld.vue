<template>
  <div class="bg-gray-300">
    <h2>
      this is a prop: <span class="text-xl font-bold">{{ msg }}</span>
    </h2>
    <div>
      <h1>Lets see what pinia does:</h1>
      <div>State: {{ state }}</div>
      <div>Double: {{ doubleCount }}</div>
      <button class="bg-green-500 text-white p-4" @click="add">Add</button>
      <button class="bg-red-500 text-white p-4" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCounterStore } from "../stores/counter";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: { type: String, default: "" },
  },
  setup() {
    const counterStore = useCounterStore();
    return {
      // gives access to the whole store
      counterStore,
      // gives access only to specific state
      state: computed(() => counterStore.data.counter),
      // gives access to specific getter; like `computed` properties
      doubleCount: computed(() => counterStore.doubleCount),
      add: counterStore.add,
      reset: counterStore.reset,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
