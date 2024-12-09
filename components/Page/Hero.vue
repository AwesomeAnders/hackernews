<template>
  <h2 class="hero">
    Stay Updated with the latest Tech News!
  </h2>
</template>

<style lang="scss" scoped>
.hero {
  font-size: 3rem;
  text-align: center;
  padding: $space-2;
  margin-top: 60px;

  @media screen and (max-width: $breakpoint-md) {
          font-size: 2.5rem;
          margin-top: 80px;

        }

  @media screen and (max-width: $breakpoint-sm) {
          font-size: 2rem;
          margin-top: 60px;

        }

}
</style>
