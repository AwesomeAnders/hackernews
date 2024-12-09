<script setup lang="ts">
interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const { size = 'medium' } = defineProps<ButtonProps>()
</script>

<template>
  <button
    :disabled="disabled"
    :class="['button', `button--${size}`]"
    class="button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
    color: $color-white;
    background-color: $color-primary-dark;
    border: none;
    cursor: pointer;
    border-radius: $border-radius-1;
    transition: all 0.3s;
    width: fit-content;

    &--small {
      padding: $space-1 $space-2;
      font-size: $font-size-sm;
    }

    &--medium {
      padding: $space-2 $space-3;
      font-size: $font-size-md;
    }

    &--large {
      padding: $space-3 $space-4;
      font-size: $font-size-lg;
    }

    &:disabled {
      opacity: 0.8;
      cursor: progress;
    }

    &:hover:not(:disabled){
      background-color: $color-primary-light;
    }

    &:active:not(:disabled) {
      background-color: $color-primary-dark;
    }

}
</style>
