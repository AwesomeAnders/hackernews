<template>
  <VCard class="loader">
    <VSkeleton class="loader__image" />

    <div class="loader__content">
      <VSkeleton class="loader__title" />
      <VSkeleton class="loader__title" />
      <VSkeleton class="loader__link" />
      <VSkeleton class="loader__link" />
    </div>
  </VCard>
</template>

<style lang="scss" scoped>
.loader {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: $space-2;

    &__content {
        gap: $space-2;
        display: flex;
        flex-direction: column;
        padding: $space-3;
    }

    &__image {
        height: 160px;
    }

    &__title {
        height: 20px;
        width: 100%;
    }

    &__link {
        height: 14px;
        width: 60%;
    }

}
</style>
