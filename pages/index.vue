<script setup lang="ts">
import type { Story } from '~/shared/Story'

definePageMeta({
  layout: false,
})

const { data, refresh, status } = await useHackerNewsFetch<Story[]>('/stories')
</script>

<template>
  <NuxtLayout name="default">
    <template #hero>
      <PageHero />
    </template>

    <PageSection id="top-stories">
      <VButton
        :disabled="status === 'pending'"
        @click="refresh"
      >
        Reload stories
      </VButton>

      <VGrid>
        <StoryItem
          v-for="(story, index) in data"
          :key="index"
          :item="story"
          :loading="status === 'pending'"
        />
      </VGrid>
    </PageSection>
  </nuxtlayout>
</template>
