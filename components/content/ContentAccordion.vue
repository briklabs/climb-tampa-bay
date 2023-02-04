<template>
  <div class="flow-root">
    <div class="-my-8 divide-y divide-gray-100">
      <details
        v-for="(item, n) in items"
        class="group py-8 [&_summary::-webkit-details-marker]:hidden"
        :open="n === 0"
      >
        <summary class="flex items-center justify-between cursor-pointer">
          <h2 class="relative">
            <span
              class="absolute tracking-tighter text-6xl font-black text-teal-100 -top-4"
              >0{{ n + 1 }}</span
            >
            <span class="text-lg font-medium text-gray-900 z-10 relative">{{
              item.title
            }}</span>
          </h2>

          <span class="relative ml-1.5 h-5 w-5 flex-shrink-0 text-xl">
            <i class="lni lni-arrow-top-right group-open:-rotate-180"></i>
          </span>
        </summary>

        <p class="mt-4 leading-relaxed text-gray-700">
          {{ item.body }}
        </p>
      </details>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  title: string;
  body: string;
}

const items: Item[] = [
  {
    title: "Market Research",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
  {
    title: "Founding Membership",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
  {
    title: "Grand Opening",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
  },
];
</script>
