<template>
  <div class="quiz-wrapper">
    <div class="loading" v-if="loading">Ma'lumotlar yuklanmoqda</div>
    <template v-else>
      <div class="quiz-header">
        <h2>Yozma savol</h2>
        <span
          >{{ QuizList.length > ActiveQuiz ? ActiveQuiz + 1 : "0" }} /
          {{ QuizList.length }}</span
        >
      </div>
      <div class="quiz-body" v-if="!isFinished">
        <template v-if="QuizList.length">
          <div
            class="quiz-body-item"
            v-for="(quiz, index) in QuizList"
            :key="quiz.id"
          >
            <template v-if="ActiveQuiz == index">
              <h3>{{ quiz.question }}</h3>
              <div class="form-group">
                <textarea v-model="quiz.correct" placeholder="Javob yozing"></textarea>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <h5>Savollar mavjud emas!</h5>
        </template>
      </div>
      <div class="quiz-body" v-else>
        <h5>{{responseAnswer}}</h5>
        <button class="btn" @click="fetchList">
          Qayta ishlash
        </button>
      </div>
      <div class="quiz-footer" v-if="!isFinished && QuizList.length">
        <button class="btn" @click="QuizPrevious" :disabled="ActiveQuiz == 0">
          Oldingi
        </button>
        <button
          v-if="ActiveQuiz >= QuizList.length - 1"
          class="btn"
          @click="finished"
        >
          Tugatish
        </button>
        <button
          v-else
          class="btn"
          @click="QuizNext"
          :disabled="ActiveQuiz == QuizList.length"
        >
          Keyingi
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      QuizList: [],
      ActiveQuiz: 0,
      loading: true,
      isFinished: false,
      responseAnswer: ''
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    ...mapActions("test", ["fetchListType", "checkFinishedWriting"]),
    async finished() {
      let response = [];
      this.QuizList.forEach((el) => {
        response.push({
          question_id: el.id,
          answer: el.correct,
        });
      });
      let res = await this.checkFinishedWriting({ form: response });
      this.isFinished = true;
      this.responseAnswer = res
    },
    QuizPrevious() {
      if (!this.ActiveQuiz == 0) {
        this.ActiveQuiz--;
      }
    },
    QuizNext() {
      if (this.QuizList.length > this.ActiveQuiz) {
        this.ActiveQuiz++;
      }
    },
    async fetchList() {
      try {
        this.isFinished = false;
        this.ActiveQuiz = 0;
        this.loading = true;
        let res = await this.fetchListType({type: 3});
        this.QuizList = [...res.data];
        setTimeout(() => {
          this.loading = false;
        }, 200);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>