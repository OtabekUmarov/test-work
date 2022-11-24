<template>
  <div class="quiz-wrapper">
    <div class="quiz-header">
      <h2>Bitta to'g'ri javobli savol qo'shish</h2>
    </div>
    <div class="quiz-body">
        <div class="form-group">
            <label class="w-100">
                Savol nomi
                <textarea type="text" v-model="form.question" placeholder="Kiriting"></textarea>
            </label>
        </div>
        <div class="form-group" v-for="(item,index) in form.answers" :key="index">
            <div class='answer'>
                <span @click="isCorrectAnswer(index)" :class="{active: item.is_correct}">{{index + 1}}</span>
                <input type="text" v-model="item.answer" placeholder="Kiriting">
                <button v-if="index != 0" @click="removeAnswer(index)" class="answer-remove">X</button>
            </div>
        </div>
        <button class="btn" @click="addAnswerItem" v-if="form.answers.length < 4">Javob qo'shish</button>
        <p class="red">
          {{error_message}}
        </p>
    </div>
    <div class="quiz-footer">
      <button class="btn" @click="send">Saqlash</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      form: {
          question: '',
          answers: [
              {
                  answer: '',
                  is_correct: false
              }
          ]
      },
      error_message: ''
    };
  },
  methods: {
    ...mapActions('test', ['createItemTest1']),
    addAnswerItem(){
      this.form.answers.push({
        answer: '',
        is_correct: false
      })
    },
    removeAnswer(index){
      this.form.answers.splice(index,1)
    },  
    isCorrectAnswer(index) {
      let find_index = this.form.answers.findIndex(el => el.is_correct)
      if (find_index != -1) {
        this.form.answers[find_index].is_correct = false
      }
      this.form.answers[index].is_correct = true
    },
    send(){
      let count = 0
        this.form.answers.forEach(el => {
          if (el.is_correct) count++
        })
        if (count != 1) {
          this.error_message = "1 ta to'g'ri javob bo'lishi kerak"
        } else {
          this.createItemTest1({form: this.form})
          this.$router.push('/test')
        }
    }
  }
};
</script>