<template>
  <header class="sticky top-0 flex justify-between items-center px-4 h-24">
    <RouterLink to="/"><AppLogo /></RouterLink>
    <slot name="navigation" />
    <ul>
      <li>Instagram</li>
    </ul>
  </header>
</template>
