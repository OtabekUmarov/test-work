<template>
  <div class="quiz-wrapper">
    <div class="quiz-header">
      <h2>Yozma savol qo'shish</h2>
    </div>
    <div class="quiz-body">
        <div class="form-group">
            <label class="w-100">
                Savol nomi
                <textarea type="text" v-model="form.question" placeholder="Kiriting"></textarea>
            </label>
        </div>
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
      },
      error_message: ''
    };
  },
  methods: {
    ...mapActions('test', ['createItemWriting']),
    send(){
        if (!this.form.question) {
          this.error_message = "Iltimos savolni kiriting"
        } else {
          this.error_message = ""
          this.createItemWriting({form: this.form})
          this.$router.push('/test')
        }
    }
  }
};
</script>