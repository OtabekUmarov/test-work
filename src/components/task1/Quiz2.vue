<template>
  <div class="quiz-wrapper">
    <div class="quiz-header">
      <h2>Multiple checkbox quiz</h2>
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
              <li
                v-for="item in quiz.variants"
                :key="item.id"
                :class="{ correct: isFinished && item.checked }"
              >
                <label
                  :for="'item.variant' + item.id"
                  :class="{ disabled: isFinished }"
                >
                  <input
                    :disabled="isFinished"
                    v-model="item.checked"
                    type="checkbox"
                    :id="'item.variant' + item.id"
                    :value="item.alphabet"
                  />
                  <span> {{ item.alphabet }} ) {{ item.variant }} </span>
                </label>
              </li>
            </ul>
          </template>
        </div>
      </template>
      <span v-else>
        You answered <small>{{ ScoreBall }}</small> out of
        <small>{{ AllCorrectAnswers }}</small> questions correctly.</span
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
        variant="primary"
        @click="QuizNext"
        :disabled="ActiveQuiz == QuizList.length"
        >{{ ActiveQuiz >= QuizList.length - 1 ? "Finish" : "Next" }}</button
      >
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
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Bill Gates",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Elon Musk",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Jeff Bezos",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Larry Ellison",
              checked: false,
            },
          ],
          answer: null,
          correct: ["b", "c", "d"],
        },
        {
          id: 2,
          question: "Which is car the most expensive in the world ?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Lamborghini Veneno Roadster",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Aston Martin Valkyrie",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Koenigsegg CCXR Trevita",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Bugatti La Voiture Noire",
              checked: false,
            },
          ],
          answer: null,
          correct: ["a", "d"],
        },
        {
          id: 3,
          question: "Which is country the biggest in the world ?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "USA",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Kazakhstan",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Russian",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Canada",
              checked: false,
            },
          ],
          answer: null,
          correct: ["b", "d"],
        },
        {
          id: 4,
          question: "In which ocean is the Mariana Trench located",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Pacific Ocean",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Atlantic Ocean",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Indian Ocean",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Arctic Ocean",
              checked: false,
            },
          ],
          answer: null,

          correct: ["a", "d"],
        },
        {
          id: 5,
          question: "Who is the first president of USA",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "John Adams",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Andrew Jackson",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "James Madison",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "George Washington",
              checked: false,
            },
          ],
          answer: null,

          correct: ["b", "d"],
        },
        {
          id: 6,
          question: "Which is the highest capital company in the world ?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Microsoft Corp",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Amazon.com",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Alphabet Inc",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Apple Inc",
              checked: false,
            },
          ],
          answer: null,

          correct: ["a", "c"],
        },
        {
          id: 7,
          question: "What is Earth's largest continent?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Africa",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Europe",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Asia",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Antartica",
              checked: false,
            },
          ],
          answer: null,

          correct: ["b", "d"],
        },
        {
          id: 8,
          question: "What is the driest place on Earth?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Mcmurdo, Antartica",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Atacama desert",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Sahara desert",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Kufra, Libya",
              checked: false,
            },
          ],
          answer: null,
          correct: ["a", "b"],
        },
        {
          id: 9,
          question: "In what country can you visit Machu Picchu?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Bolivia",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Columbia",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Chile",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Peru",
              checked: false,
            },
          ],
          answer: null,
          correct: ["c", "d"],
        },
        {
          id: 10,
          question: "Which African nation has the most pyramids?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Sudan",
              checked: false,
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Libya",
              checked: false,
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Egypt",
              checked: false,
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Algeria",
              checked: false,
            },
          ],
          answer: null,
          correct: ["c", "a"],
        },
      ],
      ActiveQuiz: 0,
      ScoreBall: 0,
      AllCorrectAnswers: 0,
      Answers: [],
      isFinished: false,
    };
  },
  methods: {
    QuizPrevious() {
      if (!this.ActiveQuiz == 0) {
        this.ActiveQuiz--;
      }
    },
    QuizNext() {
      if (this.QuizList.length > this.ActiveQuiz) {
        const currentQuiz = this.QuizList[this.ActiveQuiz];
        let index = this.Answers.findIndex((el) => el.id == currentQuiz.id);
        if (index == -1) {
          this.Answers.push({
            id: currentQuiz.id,
            variants: currentQuiz.variants,
            correct: currentQuiz.correct,
          });
        } else {
          this.Answers[index].variants = currentQuiz.variants;
        }
        this.ActiveQuiz++;
      }
    },
  },
  mounted() {
    this.QuizList.forEach((el) => {
      this.AllCorrectAnswers += el.correct.length;
    });
  },
  watch: {
    ActiveQuiz(val) {
      if (val == this.QuizList.length) {
        if (!this.isFinished) {
          this.Answers.forEach((element) => {
            element.variants.forEach((element2) => {
              if (element2.checked) {
                element.correct.forEach((element3) => {
                  if (element2.alphabet == element3) {
                    this.ScoreBall++;
                  }
                });
              }
            });
          });
        }
        this.isFinished = true;
      }
      // this.QuizList[this.ActiveQuiz].variants.forEach((el) => {
      //   if (el.checked) {
      //     this.Answers.push(el);
      //   }
      // });
    },
  },
};
</script>

<style>
</style>