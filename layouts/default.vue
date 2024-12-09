<template>
  <div>
    <PageHeader />

    <slot name="hero" />
    <PageContent>
      <slot />
    </PageContent>

    <PageFooter />
  </div>
</template>
