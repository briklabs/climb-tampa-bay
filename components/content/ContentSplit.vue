<template>
  <section class="my-8 sm:my-16">
    <div class="grid sm:grid-cols-2 gap-y-8 gap-x-16 px-4 sm:px-0">
      <div><slot name="left" /></div>
      <div><slot name="right" /></div>
    </div>
  </section>
</template>
