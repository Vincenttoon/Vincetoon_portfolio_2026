<script setup>
defineProps({
  metric: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="metric-card">
    <span class="metric-card__value">{{ metric.value }}</span>
    <span class="metric-card__label">{{ metric.label }}</span>
    <span class="metric-card__detail">{{ metric.detail }}</span>
  </article>
</template>
