<script setup>
import { ref } from 'vue'
import MetricCard from './MetricCard.vue'

defineProps({
  profile: {
    type: Object,
    required: true,
  },
  metrics: {
    type: Array,
    required: true,
  },
})

const imageFailed = ref(false)
</script>

<template>
  <section id="profile" class="hero-panel" aria-labelledby="hero-heading">
    <div class="hero-panel__grid">
      <div class="hero-copy__intro">
        <p class="eyebrow">SELECT * FROM portfolio;</p>
        <h1 id="hero-heading">
          {{ profile.name }}
          <span>{{ profile.title }}</span>
        </h1>
      </div>

      <div class="profile-image-window">
        <div class="window-chrome">
          <span class="window-chrome__title">profile_image.bin</span>
          <span class="window-chrome__meta">READ_ONLY</span>
        </div>

        <div class="profile-image-window__body">
          <img
            v-if="!imageFailed"
            :src="profile.profileImage"
            :alt="`${profile.name} profile`"
            @error="imageFailed = true"
          />
          <div v-else class="profile-image-fallback" aria-label="Profile image placeholder">
            <span>VT</span>
            <small>Replace profileImage in portfolio.js</small>
          </div>

          <div class="scan-line" aria-hidden="true"></div>
        </div>

        <div class="profile-image-window__footer">
          <span>LOCATION</span>
          <strong>{{ profile.location }}</strong>
        </div>
      </div>

      <div class="hero-copy__details">
        <p class="hero-copy__summary">{{ profile.summary }}</p>
        <p class="hero-copy__value">{{ profile.valueStatement }}</p>

        <div class="hero-actions">
          <a
            class="button button--primary"
            :href="profile.links.github"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
          <a
            class="button button--secondary"
            :href="profile.links.resumePdf"
            target="_blank"
            rel="noreferrer"
          >
            View Résumé
          </a>
          <a
            class="button button--secondary"
            :href="profile.links.linkedin"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a class="button button--ghost" href="#contact">Contact</a>
        </div>

        <div class="profile-console" aria-label="Professional and personal profile">
          <div
            v-for="(line, index) in profile.consoleLines"
            :key="line.key"
            class="profile-console__row"
          >
            <span class="profile-console__line-number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <code>
              <span class="profile-console__key">{{ line.key }}</span>
              <span class="profile-console__operator"> = </span>
              <span class="profile-console__value">"{{ line.value }}"</span>
            </code>
          </div>
        </div>
      </div>
    </div>

    <div class="metrics-grid" aria-label="Career metrics">
      <MetricCard v-for="metric in metrics" :key="metric.label" :metric="metric" />
    </div>

    <div class="context-grid" aria-label="Career history, analysis, and personal context">
      <article
        v-for="card in profile.contextCards"
        :key="card.key"
        class="context-card"
      >
        <span class="context-card__key">{{ card.key }}</span>
        <h2>{{ card.title }}</h2>
        <p>{{ card.body }}</p>
      </article>
    </div>
  </section>
</template>
