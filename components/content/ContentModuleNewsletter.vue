<template>
  <form action="#" @click.prevent="">
    <div class="relative">
      <label for="email" class="sr-only">Email</label>

      <input
        type="email"
        placeholder="Email address"
        class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
      />

      <button type="submit" class="absolute top-2 right-2 text-black text-4xl">
        <span class="sr-only"> Sign Up </span>
        <i class="lni lni-arrow-top-right"></i>
      </button>
    </div>
  </form>
</template>
