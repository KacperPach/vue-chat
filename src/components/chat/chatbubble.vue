<script setup>
const props = defineProps(['isUserMessage'])
</script>

<template>
  <div :style="props.isUserMessage ? { 'align-self': 'flex-end' } : { 'align-self': 'flex-start' }">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  align-self: baseline;
  border: 1px solid #bababa;
  border-radius: 25px;
  margin: 5px;
  padding: 0.5em;
}
</style>
