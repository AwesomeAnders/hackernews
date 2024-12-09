<script setup lang="ts">
interface Props {
  avatarImage?: string
  name: string
  timeStamp: number
  karma: number
}

defineProps<Props>()
</script>

<template>
  <div class="author">
    <div class="author__wrapper">
      <NuxtImg
        :src="avatarImage"
        placeholder="avatar.jpg"
        format="webp"
        height="40"
        width="40"
        alt="avatar"
      />
      <div class="author__info">
        <span>Author: {{ name }}</span>
        <span>Date: {{ new Date(timeStamp * 1000).toLocaleDateString('en-GB') }}</span>
      </div>
    </div>

    <div class="author__karma">
      Author karma: {{ karma }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.author {

    display: flex;
    flex-direction: column;
    gap: $space-1;

    &__wrapper {
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: $space-2;
    }

    &__info {
        font-weight: 700;
        display: flex;
        flex-direction: column;
    }

    &__karma {
        font-weight: 500;
        color: $color-grey-dark
    }
}
</style>
