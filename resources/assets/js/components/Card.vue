<template>
  <div class="card" :class="classes">
    <div v-if="title" class="card-header">
      {{ title }}
    </div>

    <div class="card-body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, default: null },
    classes: { type: Array, default: () => { return [] } }
  }
}
</script>
