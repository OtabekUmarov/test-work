<template>
  <div class="page">
    <div class="page-header">
      <div class="page-header-btn">
        <button class="btn blue" @click="isVisible = true">
          Talaba qo'shish
        </button>
      </div>
    </div>
    <div class="page-body">
      <table class="table">
        <thead>
          <tr>
            <th width="1%">ID</th>
            <th>Ismi</th>
            <th>Telefon raqami</th>
            <th>Kurs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ findCourse(item.course) }}</td>
            <td>
              <div class="table-action">
                <button @click="deleteItem(item.id)">O'chirish</button>
                <button @click="editItem(item.id)">Tahrirlash</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <popup-create
      v-if="isVisible"
      :isVisible="isVisible"
      @close="isVisible = false"
      @create="create"
    />
    <popup-update
      v-if="isVisibleUpdate"
      :isVisible="isVisibleUpdate"
      :detail="detail"
      @close="isVisibleUpdate = false"
      @update="update"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import popupCreate from "@/components/popup/students/create";
import popupUpdate from "@/components/popup/students/update";

export default {
  components: {
    popupCreate,
    popupUpdate,
  },
  data() {
    return {
      detail: {},
      isVisible: false,
      isVisibleUpdate: false,
    };
  },
  computed: {
    ...mapGetters("students", ["list", "courses"]),
  },
  created() {
    this.fetchData();
  },
  methods: {
    ...mapActions("students", [
      "createItem",
      "updateItem",
      "fetchList",
      "delete",
      "fetchDetail",
    ]),
    async create(form) {
      try {
        let res = await this.createItem({ form });
        if (res.status == 201) {
          await this.fetchData();
          this.isVisible = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async update(form) {
      try {
        let res = await this.updateItem({ form });
        if (res.status == 200) {
          await this.fetchData();
          this.isVisibleUpdate = false;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteItem(id) {
      try {
        await this.delete(id);
        this.fetchData();
      } catch (error) {
        console.error(error);
      }
    },
    async editItem(id) {
      try {
        // ! Agarda listda to'liq ma'lumotlar bo'lmasa detail olamiz
        let res = await this.fetchDetail(id);
        this.detail = {...res.data};
        this.isVisibleUpdate = true;
      } catch (error) {
        console.error(error);
      }
    },
    findCourse(val) {
      return this.courses.find((el) => el.id == val).name;
    },
    fetchData() {
      try {
        this.fetchList();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>