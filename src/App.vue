<template>
  <div id="app" class="tasks-wrapper">
    <div class="tasks-header">
      <ul>
        <li>
          <button class="btn"
            @click="isActive = 1"
            variant="outline-primary"
            :class="{ active: isActive == 1 }"
          >
            task-1
          </button>
        </li>
        <li>
          <button class="btn"
            @click="isActive = 2"
            variant="outline-primary"
            :class="{ active: isActive == 2 }"
          >
            task-2
          </button>
        </li>
        <li>
          <button class="btn"
            @click="isActive = 3"
            variant="outline-primary"
            :class="{ active: isActive == 3 }"
          >
            task-3
          </button>
        </li>
        <li>
          <button class="btn"
            @click="isActive = 4"
            variant="outline-primary"
            :class="{ active: isActive == 4 }"
          >
            task-4
          </button>
        </li>
      </ul>
    </div>
    <div class="tasks-body">
      <div class="tasks-body-item" :class="{ active: isActive == 1 }">
        <task1></task1>
      </div>
      <div class="tasks-body-item" :class="{ active: isActive == 2 }">
        <task2></task2>
      </div>
      <div class="tasks-body-item" :class="{ active: isActive == 3 }">
        <task3></task3>
      </div>
      <div class="tasks-body-item" :class="{ active: isActive == 4 }"></div>
    </div>
  </div>
</template>

<script>
import task1 from "@/components/task1";
import task2 from "@/components/task2";
import task3 from "@/components/task3";
export default {
  name: "App",
  components: {
    task1,
    task2,
    task3,
  },
  data() {
    return {
      isActive: 1,
    };
  },
};
</script>

<style>
</style>
