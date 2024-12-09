<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: $border-radius-2;
    border-style: solid;
    border-width: $border-width-1;
    box-shadow: $box-shadow-1;
    border-color: $border-color-light;
    cursor: pointer;
    transition: all 0.3s;
    overflow: hidden;

    &:hover {
      box-shadow: $box-shadow-2;
    }
}
</style>
