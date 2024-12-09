<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  row-gap: 3rem;
  column-gap: 2rem;

  @media screen and (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, minmax(auto, 1fr));

  }

  @media screen and (max-width: $breakpoint-md) {
    grid-template-columns: repeat(1, minmax(auto, 1fr));

  }
}
</style>
