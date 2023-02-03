<template>
  <section class="bg-black text-white rounded-3xl my-16">
    <div class="p-8 space-y-8">
      <div><slot /></div>
      <div class="grid grid-cols-2 gap-8">
        <div
          v-for="n in 4"
          :key="n"
          :id="`${n}-price`"
          class="bg-neutral-800 rounded-3xl p-8"
        >
          <h2>$15</h2>
          <p>Daily</p>
          <ul>
            <li>Includes this</li>
            <li>Includes that</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
