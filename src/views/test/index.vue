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
            <th>ID</th>
            <th>Savol</th>
            <th>Savol turi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in list' :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.question}}</td>
            <td>{{
                item.type == 1 ? 'Bitta javobli' : item.type == 2 ? 'Ikkita javobli' : 'Yozma'
              }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <popup
      :isVisible="isVisible"
      @close='isVisible = false'
      @create="create"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import popup from "@/components/popup/test";

export default {
  components: {
    popup
  },
  data(){
    return {
      isVisible: false
    }
  },
  computed: {
    ...mapGetters('test', ['list'])
  },
  async created() {
    try {
      await this.fetchList()
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    ...mapActions("test", ["fetchList"]),
    create(val){
      this.$router.push({
        path: '/test/create',
        query: {
          tab: val
        }
      })
    }
  },
};
</script>

<style>
</style>