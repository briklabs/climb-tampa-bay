<template>
  <header>
    <div
      class="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 sm:h-32 p-4 sm:p-0"
    >
      <RouterLink to="/"><AppLogo /></RouterLink>
      <nav
        class="space-x-8 order-last sm:order-none font-medium flex-1 text-center"
      >
        <RouterLink to="/">Features</RouterLink>
        <RouterLink to="/pricing">Pricing</RouterLink>
      </nav>
      <div class="space-x-4 flex items-center">
        <a href="#" target="_blank" rel="noopener noreferrer" class="text-xl"
          ><i class="lni lni-instagram"></i
        ></a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="text-xl"
          ><i class="lni lni-discord-alt"></i
        ></a>
        <!-- <a href="/#newsletter" class="btn btn-primary">
          <i class="lni lni-bullhorn"></i> Contact
        </a> -->
      </div>
    </div>
  </header>
</template>
