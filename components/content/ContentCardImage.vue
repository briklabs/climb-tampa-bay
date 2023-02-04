<template>
  <ContentCard class="group relative block bg-black">
    <img
      alt=""
      :src="image"
      class="absolute inset-0 h-full w-full object-cover opacity-40 sm:opacity-70 transition-opacity group-hover:opacity-40"
    />

    <div class="relative p-4 prose prose-invert prose-a:no-underline">
      <slot name="overlay"></slot>

      <div class="mt-16">
        <div
          class="translate-y-8 transform sm:opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
        >
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </ContentCard>
</template>

<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    default: "",
    required: false,
  },
});
</script>
