<template>
  <div class="quiz-wrapper">
    <div class="quiz-header">
      <h2>Single checkbox quiz</h2>
      <span
        >{{ QuizList.length > ActiveQuiz ? ActiveQuiz + 1 : "10" }} /
        {{ QuizList.length }}</span
      >
    </div>
    <div class="quiz-body">
      <template v-if="ActiveQuiz < QuizList.length">
        <div
          class="quiz-body-item"
          v-for="(quiz, index) in QuizList"
          :key="quiz.id"
        >
          <template v-if="ActiveQuiz == index">
            <h3>
              <span v-if="isFinished">This quiz is finished !</span>
              {{ quiz.question }}
            </h3>
            <ul>
              <li v-for="item in quiz.answers" :key="item.id">
                <label :for="item.id" :class="{ disabled: isFinished }">
                  <input
                    @input="GetAnswer($event, item.id)"
                    :disabled="isFinished"
                    v-model="quiz.correct"
                    type="radio"
                    :id="item.id"
                    name="quiz"
                    :value="item.id"
                  />
                  <span> {{ item.answer }} {{item.id}} </span>
                </label>
              </li>
            </ul>
          </template>
        </div>
      </template>
      <span v-else>
        You answered <small>{{ ScoreBall }}</small> out of
        <small>{{ QuizList.length }}</small> questions correctly.</span
      >
    </div>
    <div class="quiz-footer">
      <button class="btn"
        variant="light"
        @click="QuizPrevious"
        :disabled="ActiveQuiz == 0"
        >{{
          ActiveQuiz >= QuizList.length ? "Back to check answers" : "Previous"
        }}</button
      >
      <button class="btn"
        @click="finished"
        v-if="ActiveQuiz >= QuizList.length - 1"
        :disabled="ActiveQuiz == QuizList.length"
        >Finish</button>
      <button class="btn"
      v-else
        @click="QuizNext"
        :disabled="ActiveQuiz == QuizList.length"
        >Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      QuizList: [],
      ActiveQuiz: 0,
      ScoreBall: 0,
      Answers: [],
      isFinished: false,
    };
  },
  async created(){
    try {
      let res = await this.fetchListType1()
      console.log(res)
      this.QuizList = res.data
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    ...mapActions('test', ['fetchListType1','checkFinished']),
    QuizPrevious() {
      if (!this.ActiveQuiz == 0) {
        this.ActiveQuiz--;
      }
    },
    async finished(){
      let response = []
      this.QuizList.forEach(el => {
        response.push({
          question_id: el.id,
          answer_id: el.correct
        })
      })

      let res = await this.checkFinished({form: response})
      console.log(res)
    },
    QuizNext() {
      if (this.QuizList.length > this.ActiveQuiz) {
        this.ActiveQuiz++;
      } 
    },
    GetAnswer(e, id) {
      if (!this.isFinished) {
        let index = this.Answers.findIndex((el) => el.id == id);
        if (index == -1) {
          this.Answers.push({ id, key: e.target.value });
        } else {
          this.Answers[index].key = e.target.value;
        }
      }
    },
  },
  watch: {
    ActiveQuiz(val) {
      if (val == this.QuizList.length) {
        if (!this.isFinished) {
          this.QuizList.forEach((el) => {
            if (el.answer == el.correct) {
              this.ScoreBall++;
            }
          });
        }
        this.isFinished = true;
      }
    },
  },
};
</script>

<style>
</style>