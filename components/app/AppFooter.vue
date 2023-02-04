<template>
  <footer
    aria-label="Site Footer"
    class="bg-black text-neutral-200 rounded-t-3xl"
  >
    <div>
      <div class="cell"><AppLogo /></div>
      <div class="grid sm:grid-cols-4 sm:grid-rows-4 sm:border-y sm:divide-x">
        <div class="sm:row-span-4 cell">
          <h3 class="text-4xl font-bold">
            Challenge yourself and discover what you're made of on the wall
          </h3>
        </div>
        <div class="sm:row-span-2 border-b cell">
          <ul class="space-y-4 uppercase">
            <li><a href="/#the-roadmap">Roadmap</a></li>
            <li><a href="/#">Features</a></li>
            <li><a href="/#">Pricing</a></li>
          </ul>
        </div>
        <div class="sm:col-span-2 sm:row-span-2 border-b cell space-y-4">
          <h3>
            Stay in the know! Sign up for our newsletter and be the first to
            receive updates on our new gym location, grand opening, and
            exclusive member offers.
          </h3>
          <a id="#newsletter"></a>
          <ContentModuleNewsletter />
        </div>
        <div class="sm:row-span-2 cell">
          <ul class="space-y-4 uppercase">
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div class="sm:border-b cell">Discord</div>
        <div class="sm:border-b cell">Instagram</div>
      </div>
    </div>
    <div class="cell text-center">
      <p class="text-sm">Climb Tampa Bay 2023. A Brik Labs LLC project.</p>
    </div>
  </footer>
</template>

<style scoped>
.cell {
  @apply py-8 px-6;
}
</style>
