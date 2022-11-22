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
              <li v-for="item in quiz.variants" :key="item.id">
                <label :for="item.id" :class="{ disabled: isFinished }">
                  <input
                    @input="GetAnswer($event, quiz.id)"
                    :disabled="isFinished"
                    v-model="QuizList[ActiveQuiz].answer"
                    type="radio"
                    :id="item.id"
                    name="quiz"
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
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Elon Musk",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Jeff Bezos",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Larry Ellison",
            },
          ],
          answer: null,
          correct: "b",
        },
        {
          id: 2,
          question: "Which is car the most expensive in the world ?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Lamborghini Veneno Roadster",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Aston Martin Valkyrie",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Koenigsegg CCXR Trevita",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Bugatti La Voiture Noire",
            },
          ],
          answer: null,
          correct: "d",
        },
        {
          id: 3,
          question: "Which is country the biggest in the world ?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "USA",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Kazakhstan",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Russian",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Canada",
            },
          ],
          answer: null,
          correct: "c",
        },
        {
          id: 4,
          question: "In which ocean is the Mariana Trench located",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Pacific Ocean",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Atlantic Ocean",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Indian Ocean",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Arctic Ocean",
            },
          ],
          answer: null,

          correct: "a",
        },
        {
          id: 5,
          question: "Who is the first president of USA",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "John Adams",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Andrew Jackson",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "James Madison",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "George Washington",
            },
          ],
          answer: null,

          correct: "d",
        },
        {
          id: 6,
          question: "Which is the highest capital company in the world ?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Microsoft Corp",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Amazon.com",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Alphabet Inc",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Apple Inc",
            },
          ],
          answer: null,

          correct: "c",
        },
        {
          id: 7,
          question: "What is Earth's largest continent?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Africa",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Europe",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Asia",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Antartica",
            },
          ],
          answer: null,

          correct: "c",
        },
        {
          id: 8,
          question: "What is the driest place on Earth?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Mcmurdo, Antartica",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Atacama desert",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Sahara desert",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Kufra, Libya",
            },
          ],
          answer: null,

          correct: "a",
        },
        {
          id: 9,
          question: "In what country can you visit Machu Picchu?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Bolivia",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Columbia",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Chile",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Peru",
            },
          ],
          answer: null,
          correct: "c",
        },
        {
          id: 10,
          question: "Which African nation has the most pyramids?",
          variants: [
            {
              id: 1,
              alphabet: "a",
              variant: "Sudan",
            },
            {
              id: 2,
              alphabet: "b",
              variant: "Libya",
            },
            {
              id: 3,
              alphabet: "c",
              variant: "Egypt",
            },
            {
              id: 4,
              alphabet: "d",
              variant: "Algeria",
            },
          ],
          answer: null,
          correct: "a",
        },
      ],
      ActiveQuiz: 0,
      ScoreBall: 0,
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