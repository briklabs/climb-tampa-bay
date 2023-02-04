<template>
  <section class="bg-black text-white rounded-3xl my-16">
    <div class="space-y-8">
      <div class="p-8"><slot /></div>
      <div
        class="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-8 pt-0 sm:pt-0"
      >
        <div
          v-for="(item, n) in items"
          :key="n"
          :id="`${n}-price`"
          class="bg-neutral-800 rounded-3xl p-8"
        >
          <h2 class="text-4xl font-bold">${{ item.price }}</h2>
          <p class="text-xl font-medium text-teal-400">{{ item.frequency }}</p>
          <ul class="space-y-1 py-4 text-neutral-400 text-sm">
            <li v-for="feat in item.features">{{ feat }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Pricing {
  price: string;
  frequency: string;
  features: string[];
}
const items: Pricing[] = [
  {
    price: "20",
    frequency: "Daily",
    features: ["Bouldering"],
  },
  {
    price: "80",
    frequency: "Monthly",
    features: ["Includes ammenities", "Shower access", "Locker"],
  },
  {
    price: "800",
    frequency: "Yearly",
    features: ["20% discount on all merch", "Unlimited guest passes"],
  },
  {
    price: "1,200",
    frequency: "Lifetime",
    features: ["All inclusive"],
  },
];
</script>
