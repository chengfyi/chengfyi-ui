<template>
  <div>
    <cfy-input placeholder="请输入" type="text" v-model="name1" clearable></cfy-input>
    <cfy-input type="password" v-model="name2" showPassWord></cfy-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['input'])
const name1 = ref('')
const name2 = ref('')

</script>

<style lang="scss" scoped>
.cfy-input {
  width: 180px !important;
}
</style>
