<template>
  <div class="task1-wrapper">
    <div class="task1-main">
      <quiz1 v-if="isActive == 1"> </quiz1>
      <quiz2 v-else-if="isActive == 2"> </quiz2>
      <quiz3 v-else> </quiz3>
    </div>
    <div class="task1-sidebar">
      <ul>
        <li :class="{ active: isActive == 1 }" @click="isActive = 1">
          Bitta javobli savol
        </li>
        <li :class="{ active: isActive == 2 }" @click="isActive = 2">
          Ikkita javobli savol
        </li>
        <li :class="{ active: isActive == 3 }" @click="isActive = 3">
          Yozma savol
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import quiz1 from "@/components/task1/Quiz1.vue";
import quiz2 from "@/components/task1/Quiz2.vue";
import quiz3 from "@/components/task1/Quiz3.vue";
export default {
  components: {
    quiz1,
    quiz2,
    quiz3,
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