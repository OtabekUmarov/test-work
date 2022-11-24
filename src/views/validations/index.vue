<template>
  <div class="page">
    <div class="page-body login">
      <div class="form-group">
        <label class="w-100">
          Foydalanuvchi nomi
          <input
            type="text"
            placeholder="Kiriting"
            @blur="onBlurName"
            v-model="form.name"
          />
          <p class="red">{{ error_name }}</p>
        </label>
      </div>
      <div class="form-group">
        <label class="w-100">
          Telefon raqam
          <input
            type="number"
            placeholder="Kiriting"
            @blur="onBlurPhone"
            v-model="form.phone"
          />
          <p class="red">{{ error_phone }}</p>
        </label>
      </div>
      <div class="form-group">
        <label class="w-100">
          Passport
          <input
            type="text"
            placeholder="Kiriting"
            @blur="onBlurPassport"
            v-model="form.passport"
          />
          <p class="red">{{ error_passport }}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        name: "",
        passport: "",
        pinfl: "",
        birth_date: "",
      },
      error_name: "",
      error_phone: "",
      error_passport: "",
      error_pinfl: "",
      error_date: "",
    };
  },
  methods: {
    onBlurName() {
      if (!this.form.name) {
        this.error_name = "Ushbu maydon to'ldirishi shart";
      } else {
        this.error_name = "";
      }
    },
    onBlurPhone() {
      // if (!value) {
      //   return callback(new Error(this.$t("Required")));
      // }
      // if (value.length < 8) {
      //   callback(new Error(this.$t("PassValid")));
      // } else if (value.length >= 8) {
      //   if (!value.match(/[A-Z]/g)) {
      //     return callback(
      //       new Error(this.$t("PassValid2"))
      //     );
      //   } else if (!value.match(/[a-z]/g)) {
      //     return callback(
      //       new Error(this.$t("PassValid3"))
      //     );
      //   } else if (!value.match(/[0-9]/g)) {
      //     return callback(new Error(this.$t("PassValid4")));
      //   } else if (!value.match(/[!@#$%^&*().]/g)) {
      //     return callback(
      //       new Error(this.$t("PassValid5"))
      //     );
      //   } else {
      //     callback();
      //   }
      // } else {
      //   callback();
      // }
      if (!this.form.phone) {
        this.error_phone = "Ushbu maydon to'ldirishi shart";
      } else if(this.form.phone.length < 12) {
        this.error_phone = "12 tadan kam bo'lmasin";
      } else {
        this.error_phone = "";
      }
    },
    onBlurPassport() {
      if (!this.form.passport) {
        this.error_passport = "Ushbu maydon to'ldirishi shart";
      } else if(this.form.passport.length < 9) {
        this.error_passport = "9 tadan kam bo'lmasin";
      } else if(!this.form.passport.match(/[A-Z]/g)) {
        this.error_passport = "Iltimos passport harflari bilan yozing";
      } else {
        this.error_passport = "";
      }
    },
  },
};
</script>

<style>
</style>