<template>
  <div>
    <cfy-button @click="visible = () => close(true)">open</cfy-button>
    <cfy-dialog title="标题title" v-model:visible="visible">
      123123123
    </cfy-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

const close = (bool) => {
  visible.value = bool
}
</script>

<style lang="scss" scoped></style>
