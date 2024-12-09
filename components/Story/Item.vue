<script setup lang="ts">
import type { Story } from '~/shared/Story'

interface Props {
  item?: Story
  loading?: boolean
}

defineProps<Props>()
</script>

<template>
  <StoryLoader v-if="loading" />

  <VCard
    v-else-if="item"
    class="item"
    @click="navigateTo(item.url, { external: true, open: { target: '_blank' } })"
  >
    <NuxtImg
      class="item__image"
      height="160"
      width="400"
      format="webp"
      :src="`article-3.jpg`"
      :alt="item.text || item.title"
    />
    <div class="item__content">
      <h4 class="item__content__title">
        {{ item.title }}
      </h4>

      <StoryAuthor
        :name="item.author.id"
        :time-stamp="item.time"
        :karma="item.author.karma"
      />

      <NuxtLink
        class="item__link"
        :to="item.url"
        :external="true"
      >
        {{ item.url }}
      </NuxtLink>

      <span v-if="item.score">
        Article score: {{ item.score }}
      </span>
    </div>
  </VCard>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: $space-2;
    padding: $space-3;
    justify-content: space-evenly;

    &__title {
      font-size: $font-size-md;
    }
  }

  &__author {
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }

  &__link {
    word-wrap: break-word;
    font-size: $font-size-sm;
  }

  &__image {
    width: 100%;
  }

  &__skeleton {
    height: 40px;
    width: 200px;

  }

}
</style>
