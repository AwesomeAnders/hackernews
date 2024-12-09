<template>
  <div class="item animate-pulse" />
</template>

  <style lang="scss" scoped>
  .item {
      border-radius: $border-radius-1;
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.6;
      background-color: $color-grey-light;
    }
    50% {
      opacity: 0.3;

    }
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  </style>
