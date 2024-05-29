<template>
  <div>
    <cfy-button type="success" icon="cfy-icon-check">button</cfy-button>
    <cfy-button type="danger">button</cfy-button>

    <cfy-button type="success" plain round>button</cfy-button>
    <cfy-button type="danger" plain>button</cfy-button>

    <cfy-button type="info" plain>button</cfy-button>
    <cfy-button type="warning" plain round>button</cfy-button>

    <cfy-button type="info" plain disabled>button</cfy-button>
    <cfy-button type="warning" circle icon="cfy-icon-check" @click="fn" disabled></cfy-button>
  
  <button disabled>123</button>
  </div>
</template>

<script setup>

const fn=()=>{
  console.log('123')
}
</script>

<style lang="scss" scoped></style>
