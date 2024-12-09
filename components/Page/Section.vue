<template>
  <div class="section">
    <h3 class="section__title">
      <slot name="title" />
    </h3>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
.section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: $space-6;
    padding: $space-6 0;

    &__title {
      font-size: 2rem;

    }
}
</style>
