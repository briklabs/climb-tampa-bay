<template>
  <section>
    <div class="border-y border-black px-4 sm:0 py-8 sm:py-16">
      <h1 v-if="title" class="text-6xl font-bold sm:text-8xl">{{ title }}</h1>
      <figure v-if="image">
        <picture class="h-80 overflow-hidden rounded-3xl my-8 block">
          <img :src="image" alt="" class="object-cover h-full w-full" />
        </picture>
      </figure>
      <div class="prose">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
    required: false,
  },
  image: {
    type: String,
    default: "",
    required: false,
  },
});
</script>
