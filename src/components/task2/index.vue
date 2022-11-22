<template>
  <div class="task2-wrapper">
    <form class="task2-main" @submit.prevent="SubmitForm">
      <div class="task2-header">
        <h2>Form validation</h2>
      </div>
      <div class="task2-body">
        <div class="my-form-group">
          <label for="">Full name <span>*</span></label>
          <input type="text" placeholder="Full name" v-model="form.fullName" :class="{
            invalid:
              $v.form.fullName.$dirty && !$v.form.fullName.required,
          }" />
          <span v-if="$v.form.fullName.$dirty && !$v.form.fullName.required">Name is required !</span>
          <span v-else-if="
            $v.form.fullName.$dirty && !$v.form.fullName.minLength
          ">
            Password must have at least 4 letters.
          </span>
        </div>
        <div class="my-form-group">
          <label for="">Phone <span>*</span></label>
          <input :class="{
            invalid: $v.form.phone.$dirty && !$v.form.phone.required,
          }" type="tel" v-mask="'+' + '###-##-###-##-##'" placeholder="+998-##-###-##-##"
            v-model="form.phone" />
          <span v-if="$v.form.phone.$dirty && !$v.form.phone.required">Phone is required !</span>
        </div>
        <div class="my-form-group">
          <label for="">Passport seria <span>*</span></label>
          <input type="text" v-model="form.passport" placeholder="Passport seria" :class="{
            invalid:
              $v.form.passport.$dirty && !$v.form.passport.required,
          }" />
          <span v-if="$v.form.passport.$dirty && !$v.form.passport.required">Passport seria is required !</span>
          <span v-else-if="
            $v.form.passport.$dirty && !$v.form.passport.minLength
          ">
            Passport must have at least 8 letters.
          </span>
        </div>
        <div class="my-form-group">
          <label for="">PINFL <span>*</span></label>
          <input type="number" v-model="form.pinfl" placeholder="PINFL" :class="{
            invalid: $v.form.pinfl.$dirty && !$v.form.pinfl.required,
          }" />
          <span v-if="$v.form.pinfl.$dirty && !$v.form.pinfl.required">PINFL is required !</span>
          <span v-if="
            ($v.form.pinfl.$dirty && !$v.form.pinfl.minLength) ||
            ($v.form.pinfl.$dirty && !$v.form.pinfl.maxLength)
          ">
            PINFL must have at 14 letters.
          </span>
        </div>
        <div class="my-form-group">
          <label for="">Birthdate <span>*</span></label>
          <DatePicker v-model="form.birthdate" placeholder="DD-MM-YYYY" :class="{
            invalid:
              $v.form.birthdate.$dirty && !$v.form.birthdate.required,
          }" format="DD-MM-YYYY" />
          <span v-if="$v.form.birthdate.$dirty && !$v.form.birthdate.required">Birthdate is required !</span>
        </div>
      </div>
      <div class="task2-footer">
        <button class="btn" variant="primary" type="submit"> Submit </button>
      </div>
    </form>
  </div>
</template>


<script>
import {
  required,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        fullName: null,
        phone: null,
        passport: null,
        pinfl: null,
        birthdate: null,
      },
    };
  },
  validations: {
    form: {
      fullName: {
        required,
        minLength: minLength(4),
      },
      phone: {
        required,
      },
      passport: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(14),
      },
      pinfl: {
        required,
        minLength: minLength(14),
        maxLength: maxLength(14),
      },
      birthdate: {
        required,
      },
    },
  },

  methods: {
    SubmitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        this.form.fullName = null;
        this.form.phone = null;
        this.form.passport = null;
        this.form.pinfl = null;
        this.form.birthdate = null;
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>

<style>

</style>