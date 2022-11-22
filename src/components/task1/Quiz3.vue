<template>
  <div class="quiz-wrapper">
    <div class="quiz-header">
      <h2>Text quiz</h2>
      <span>{{ QuizList.length > ActiveQuiz ? ActiveQuiz + 1 : "10" }} /
        {{ QuizList.length }}</span>
    </div>
    <div class="quiz-body text-quiz">
      <template v-if="QuizList.length > ActiveQuiz">
        <div class="quiz-body-item" v-for="(quiz, index) in QuizList" :key="quiz.id">
          <template v-if="ActiveQuiz == index">
            <h3>
              <span v-if="isFinished">This quiz is finished !</span>
              {{ quiz.question }}
            </h3>
            <div class="my-form-group">
              <textarea :class="{ disabled: isFinished }" v-model="QuizList[ActiveQuiz].answer" :disabled="isFinished"
                placeholder="Enter your answer.">
              </textarea>
            </div>
          </template>
        </div>
      </template>
      <div class="quiz-body-answer" v-else-if="this.QuizList.length == this.ActiveQuiz && !showResult">
        <ul>
          <li v-for="quiz in QuizList" :key="quiz.id">
            <h3>{{ quiz.question }}</h3>
            <p>{{ quiz.answer || "-" }}</p>
            <div class="quiz-body-answer-check" v-if="quiz.answer.length">
              <button class="btn" variant="outline-success" :class="{ active: quiz.correct }"
                @click="quiz.correct = true">
                <i class="fas fa-check"></i>
              </button>
              <button class="btn" variant="outline-danger" :class="{ active: quiz.correct == false }"
                @click="quiz.correct = false">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
      <span v-else>
        <small>{{ ScoreBall }}</small> answers are correct <br />
        of <small>{{ QuizList.length }}</small> questions.</span>
    </div>
    <div class="quiz-footer">
      <button class="btn" variant="light" @click="QuizPrevious" :disabled="ActiveQuiz == 0">
        {{
            ActiveQuiz == QuizList.length
              ? "Back to check asnwers"
              : ActiveQuiz > QuizList.length && showResult
                ? "Back to select answer"
                : "Previous"
        }}
        <!-- {{
          ActiveQuiz > QuizList.length
            ? "Back to check answers"
            : ActiveQuiz == QuizList.length
            ? "Back to select answer"
            : "Previous"
        
        }} -->
      </button>
      <button class="btn" variant="primary" @click="QuizNext" :disabled="showResult">
        {{
    QuizList.length - 1 > ActiveQuiz
      ? "Next"
      : ActiveQuiz >= QuizList.length
        ? "Show result"
        : "Select answer"
        }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      QuizList: [
        {
          id: 1,
          question: "Who is the richest person in the world ?",
          answer: "",
          correct: false,
        },
        {
          id: 2,
          question: "Which is car the most expensive in the world ?",
          answer: "",
          correct: false,
        },
        {
          id: 3,
          question: "Which is country the biggest in the world ?",
          answer: "",
          correct: false,
        },
        {
          id: 4,
          question: "In which ocean is the Mariana Trench located",
          answer: "",
          correct: false,
        },
        {
          id: 5,
          question: "Who is the first president of USA",
          answer: "",
          correct: false,
        },
        {
          id: 6,
          question: "Which is the highest capital company in the world ?",
          answer: "",
          correct: false,
        },
        {
          id: 7,
          question: "What is Earth's largest continent?",
          answer: "",
          correct: false,
        },
        {
          id: 8,
          question: "What is the driest place on Earth?",
          answer: "",
          correct: false,
        },
        {
          id: 9,
          question: "In what country can you visit Machu Picchu?",
          answer: "",
          correct: false,
        },
        {
          id: 10,
          question: "Which African nation has the most pyramids?",
          answer: "",
          correct: false,
        },
      ],
      ActiveQuiz: 0,
      ScoreBall: 0,
      isFinished: false,
      showResult: false,
    };
  },
  methods: {
    QuizPrevious() {
      if (!this.ActiveQuiz == 0 && !this.showResult) {
        this.ActiveQuiz--;
      } else if (this.QuizList.length < this.ActiveQuiz && this.showResult) {
        this.showResult = false;
        this.ActiveQuiz--;
      }
    },
    QuizNext() {
      if (this.QuizList.length > this.ActiveQuiz) {
        this.ActiveQuiz++;
      } else if (this.QuizList.length == this.ActiveQuiz) {
        this.ActiveQuiz++;
        this.showResult = true;
      }
    },
  },
  watch: {
    showResult() {
      this.ScoreBall = 0;
    },
    ActiveQuiz(val) {
      if (val >= this.QuizList.length) {
        if (this.isFinished) {
          if (this.QuizList.length < val && this.showResult) {
            this.QuizList.forEach((el) => {
              if (el.correct == true) {
                this.ScoreBall++;
              }
            });
          }
        }
        this.isFinished = true;
      }
    },
  },
};
</script>

<style>

</style>