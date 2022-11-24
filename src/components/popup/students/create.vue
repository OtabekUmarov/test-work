<template>
  <div class="popup" v-if="isVisible">
    <div class="popup-wrapper">
      <div class="popup-header">
        <button class="popup-close" @click="close">X</button>
      </div>
      <div class="popup-body">
        <div class="form-group">
          <label class="w-100">
            Ismi
            <input
              type="text"
              class="w-100"
              placeholder="Ismini kiriting"
              v-model="form.name"
            />
          </label>
        </div>
        <div class="form-group">
          <label class="w-100">
            Telefon raqami
            <input
              type="number"
              class="w-100"
              placeholder="Telefon raqamini kiriting"
              v-model="form.phone"
            />
          </label>
        </div>
        <div class="form-group">
          <label class="w-100">
            Kurs
            <select class="w-100" name="course" v-model="form.course">
              <option v-for="item in courses" :key="item.id" :value="item.id">
                {{ item.name }}
              </option>
            </select>
          </label>
        </div>
      </div>
      <div class="popup-footer">
        <button class="btn blue" @click="create">Saqlash</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
        course: "",
      },
    };
  },
  computed: {
    ...mapGetters("students", ["courses"]),
  },
  methods: {
    create() {
      this.$emit("create", this.form);
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>