<template>
  <b-form class="employee-create" @submit="onSubmit" @reset="onReset" v-if="show">
    <div class="employee-header">
      <h2>Employee create</h2>
      <button class="btn" @click="$router.go(-1)" variant="primary">Back</button>
    </div>
    <div class="employee-body">
      <div class="my-form-group">
        <label for="">First name</label>
        <input type="text" v-model="form.firstName" required>
      </div>
      <div class="my-form-group">
        <label for="">Last name</label>
        <input type="text" v-model="form.lastName" required>
      </div>
      <div class="my-form-group">
        <label for="">Middle name</label>
        <input type="text" v-model="form.middleName" required>
      </div>
      <div class="my-form-group">
        <label for="">Birthdate</label>
        <input type="text" v-model="form.birthdate" required>
      </div>
      <div class="my-form-group">
        <label for="">Nationality</label>
        <input type="text" v-model="form.nationality" required>
      </div>
      <div class="my-form-group">
        <label for="">Birthplace</label>
        <input type="text" v-model="form.birthPlace" required>
      </div>
    </div>
    <div class="employee-footer">
      <button class="btn" type="submit" variant="primary">Submit</button>
      <button class="btn" type="reset" variant="danger">Reset</button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: null,
        firstName: null,
        lastName: null,
        middleName: null,
        birthdate: null,
        nationality: null,
        birthPlace: null,
      },
      show: true,
      formData: [],
    };
  },
  mounted() {
    this.formData = this.employeeList;
  },
  computed: {
    employeeList() {
      return this.$store.getters["employee/getEmployeeList"];
    },
  },
  methods: {
    onSubmit(event) {
      this.form = { ...this.form, id: this.formData.length + 1 };
      this.formData.push(this.form);
      this.$store.commit("employee", this.formData);
      this.$router.go(-1);
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>

</style>