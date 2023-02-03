<template>
  <section class="bg-black text-white rounded-3xl my-16">
    <div class="space-y-8">
      <div class="p-8"><slot /></div>
      <div class="grid sm:grid-cols-2 gap-4 sm:gap-8 p-4">
        <div
          v-for="n in 4"
          :key="n"
          :id="`${n}-price`"
          class="bg-neutral-800 rounded-3xl p-8"
        >
          <h2 class="text-4xl font-bold">$15</h2>
          <p class="text-xl font-medium">Daily</p>
          <ul class="space-y-2 py-8 list-disc list-inside text-neutral-400">
            <li>Includes this</li>
            <li>Includes that</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
