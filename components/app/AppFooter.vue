<template>
  <footer
    aria-label="Site Footer"
    class="bg-black text-neutral-200 rounded-t-3xl"
  >
    <div>
      <div class="cell"><AppLogo /></div>
      <div class="grid grid-cols-4 grid-rows-4 border-y divide-x">
        <div class="row-span-4 cell">
          <h3 class="text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
        </div>
        <div class="row-span-2 border-b cell">
          <ul class="space-y-4 uppercase">
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
        <div class="col-span-2 row-span-2 border-b cell space-y-4">
          <h3>
            Fuga nobis nostrum explicabo sapiente earum unde, eaque doloremque
            esse quibusdam ipsum iste dignissimos.
          </h3>
          <ContentModuleNewsletter />
        </div>
        <div class="row-span-2 cell">
          <ul class="space-y-4 uppercase">
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Home</a></li>
          </ul>
        </div>
        <div class="border-b cell">insta</div>
        <div class="border-b cell">insta</div>
        <div class="cell">insta</div>
        <div class="cell">insta</div>
      </div>
    </div>
    <div class="cell text-center">
      <p class="text-sm">Lorem ipsum dolor sit amet</p>
    </div>
  </footer>
</template>

<style scoped>
.cell {
  @apply py-8 px-6;
}
</style>
