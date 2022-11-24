<template>
  <div class="page">
    <div class="page-body login">
      <div class="form-group">
          <label class="w-100">
            Foydalanuvchi nomi
            <input
              type="text"
              placeholder="Kiriting"
              v-model="form.username"
            />
          </label>
        </div>
      <div class="form-group">
          <label class="w-100">
            Parol
            <input
              type="password"
              placeholder="Kiriting"
              v-model="form.password"
            />
          </label>
        </div>
        <p class="red">
          {{error_message}}
        </p>
        <button class="btn blue" @click="auth">
          Kirish
        </button>
        <button class="btn" @click="exit">
          Chiqish
        </button>
        <div class="comment">
          Birinchi bo'lib validatsiyani tekshiramiz <br>
          Keyin username password ni back end ga jonatamiz va token olamiz, tokenni parse qilgan holda foydalanuvchini rolini bilib olamiz va roliga qarab o'z cabinetiga yuboramiz!!!
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data(){
    return {
      form: {
        username: '',
        password: ''
      },
      error_message: ''
    }
  },
  methods: {
    ...mapActions("auth", ["login", 'logout']),
    async auth(){
      try {
        if (!this.form.username) {
          this.error_message = "Iltimos foydalanuvchi nomini yozing";
          return;
        }
        if (!this.form.password) {
          this.error_message = "Iltimos parolni yozing";
          return;
        }
        let res = await this.login({form:this.form})
        console.log(res)
        // response kelgandan song uning roliga qarab o'z cabinetiga yo'naltiramiz
      } catch (error) {
        console.error(error)
      }
    },
    exit() {
      try {
        this.logout()
      } catch (error) {
        console.error(error)
      }
    }
  },
};
</script>

<style>
</style>