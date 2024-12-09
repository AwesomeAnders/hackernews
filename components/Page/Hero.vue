<template>
  <div class="hero__content container">
    <h2 class="hero__content__title">
      Stay Updated with the latest Tech News!
    </h2>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-size: cover;

    @media screen and (max-width: $breakpoint-md) {
      height: 400px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: $space-4;

      @media screen and (max-width: $breakpoint-sm) {
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      &__title {

      font-size: 3.5rem;
      margin-top: 120px;

        @media screen and (max-width: $breakpoint-md) {
          font-size: 2.5rem;
          margin-top: 80px;

        }

        @media screen and (max-width: $breakpoint-sm) {
          font-size: 2rem;
          margin-top: 60px;

        }
      }
    }

}
</style>
