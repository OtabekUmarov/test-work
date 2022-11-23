<template>
  <div class="popup" v-if="isVisible">
    <div class="popup-wrapper">
      <div class="popup-header">
      <button class="popup-close" @click="close">X</button>
    </div>
    <div class="popup-body">
      <button class="btn" @click='clicked(1)'>
        task-3
      </button>
      <button class="btn" @click='clicked(2)'>
        task-3
      </button>
      <button class="btn" @click='clicked(3)'>
        task-3
      </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clicked(val) {
      this.$emit('create', val)
    },
    close(){
      this.$emit('close')
    }
  }

}
</script>

<style>

</style>