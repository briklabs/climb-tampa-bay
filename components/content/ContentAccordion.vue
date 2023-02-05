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
    title: "Concept Development",
    body: "This is the first stage of planning where the idea for the bouldering gym is developed and refined. This is a crucial step in determining the gym's target audience, competition, location, and business model.",
  },
  {
    title: "Fundraising",
    body: "Once the concept has been developed, the next step is to secure funding to cover the costs of leasing a space, purchasing equipment, and covering other startup costs.",
  },
  {
    title: "Location Selection and Leasing",
    body: "Once funding has been secured, the next step is to find a suitable location for the gym. This includes researching different neighborhoods, scouting out locations, and negotiating a lease agreement with the landlord.",
  },
  {
    title: "Grand Opening",
    body: "After the location has been secured, it's time to gear up for the big day. This includes finalizing the design and layout of the gym, ordering equipment, and setting up systems for managing membership, billing, and staffing. The grand opening is a critical moment in the life of the business, as it sets the tone for the future of the gym and helps to build momentum for continued growth.",
  },
];
</script>
