<template>
  <div class="page">
    <div class="page-header">
      <div class="page-header-btn">
        <button class="btn blue" @click="isVisible = true">
          Savol qo'shish
        </button>
      </div>
    </div>
    <div class="page-body">
      <table class="table">
        <thead>
          <tr>
            <th width='1%'>ID</th>
            <th>Savol</th>
            <th>Savol turi</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.question }}</td>
            <td>
              {{
                item.type == 1
                  ? "Bitta javobli"
                  : item.type == 2
                  ? "Ikkita javobli"
                  : "Yozma"
              }}
            </td>
            <td>
              <div class="table-action">
                <button @click="deleteItem(item.id)">O'chirish</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <popup
      v-if="isVisible"
      :isVisible="isVisible"
      @close="isVisible = false"
      @create="create"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import popup from "@/components/popup/test";

export default {
  components: {
    popup,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
    ...mapGetters("test", ["list"]),
  },
  async mounted() {
    try {
      await this.fetchList();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    ...mapActions("test", ["fetchList", "delete"]),
    create(val) {
      this.$router.push({
        path: "/test/create",
        query: {
          tab: val,
        },
      });
    },
    async deleteItem(id) {
      try {
        await this.delete(id);
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