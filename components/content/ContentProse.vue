<template>
  <div class="prose prose-a:no-underline" :class="{ 'prose-invert': dark }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  dark: {
    type: Boolean,
    default: false,
    required: false,
  },
});
</script>
