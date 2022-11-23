<template>
  <div id="app" class="wrapper">
    <div class="sidebar">
      <div class="sidebar-logo">
        Logo
      </div>
      <ul>
        <li>
          <router-link to="/test" class="sidebar-link"> Test </router-link>
        </li>
        <li>
          <router-link to="/" class="sidebar-link"> Task2 </router-link>
        </li>
        <!-- <li>
          <button
            class="btn"
            @click="isActive = 1"
            :class="{ active: isActive == 1 }"
          >
            Savol qo'shish
          </button>
        </li>
        <li>
          <button
            class="btn"
            @click="isActive = 5"
            variant="outline-primary"
            :class="{ active: isActive == 5 }"
          >
            task-1
          </button>
        </li>
        <li>
          <button
            class="btn"
            @click="isActive = 2"
            variant="outline-primary"
            :class="{ active: isActive == 2 }"
          >
            task-2
          </button>
        </li>
        <li>
          <button
            class="btn"
            @click="isActive = 3"
            variant="outline-primary"
            :class="{ active: isActive == 3 }"
          >
            task-3
          </button>
        </li>
        <li>
          <button
            class="btn"
            @click="isActive = 4"
            variant="outline-primary"
            :class="{ active: isActive == 4 }"
          >
            task-4
          </button>
        </li> -->
      </ul>
    </div>
    <div class="main">
      <router-view />
      <!-- <div class="tasks-body">
        <div class="tasks-body-item" :class="{ active: isActive == 1 }">
          <question></question>
        </div>
        <div class="tasks-body-item" :class="{ active: isActive == 5 }">
          <task1></task1>
        </div>
        <div class="tasks-body-item" :class="{ active: isActive == 2 }">
          <task2></task2>
        </div>
        <div class="tasks-body-item" :class="{ active: isActive == 3 }">
          <task3></task3>
        </div>
        <div class="tasks-body-item" :class="{ active: isActive == 4 }"></div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import question from "@/components/question";
// import task1 from "@/components/task1";
// import task2 from "@/components/task2";
// import task3 from "@/components/task3";
export default {
  name: "App",
  components: {
    // question,
    // task1,
    // task2,
    // task3,
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
