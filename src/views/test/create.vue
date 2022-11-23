<template>
  <div class="page">
    <quiz1 v-if="$route.query.tab == 1"></quiz1>
    <quiz2 v-else-if="$route.query.tab == 2"></quiz2>
    <quiz3 v-else> </quiz3>
  </div>
</template>

<script>
import quiz1 from "@/components/question/Quiz1.vue";
import quiz2 from "@/components/question/Quiz2.vue";
import quiz3 from "@/components/question/Quiz3.vue";
export default {
  components: {
    quiz1,
    quiz2,
    quiz3,
  },
};
</script>

<style>
</style>