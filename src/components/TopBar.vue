<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  profile: {
    type: Object,
    required: true,
  },
})

const mobileMenuOpen = ref(false)

const portfolioSections = [
  { label: 'Profile', target: '#profile' },
  { label: 'Projects', target: '#database', schema: 'projects' },
  { label: 'Capabilities', target: '#database', schema: 'capabilities' },
  { label: 'Leadership', target: '#database', schema: 'leadership' },
  { label: 'Experience', target: '#database', schema: 'experience' },
  { label: 'Personal Interests', target: '#database', schema: 'personal' },
  { label: 'Contact', target: '#contact' },
]

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function navigateToSection(item) {
  if (item.schema) {
    window.dispatchEvent(
      new CustomEvent('portfolio:navigate-schema', {
        detail: { schemaId: item.schema },
      }),
    )
  }

  closeMobileMenu()
}

function closeOnEscape(event) {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

function closeOnDesktop() {
  if (window.matchMedia('(min-width: 901px)').matches) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', closeOnEscape)
  window.addEventListener('resize', closeOnDesktop)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', closeOnEscape)
  window.removeEventListener('resize', closeOnDesktop)
})
</script>

<template>
  <header class="top-bar">
    <a class="brand" href="#top" aria-label="Return to top" @click="closeMobileMenu">
      <span class="brand__prompt">&gt;_</span>
      <span>vincent.toon</span>
    </a>

    <nav class="top-bar__nav" aria-label="Primary navigation">
      <a href="#profile">profile</a>
      <a href="#database">database</a>
      <a :href="profile.links.resumePdf" target="_blank" rel="noreferrer">résumé</a>
      <a href="#contact">contact</a>
      <a :href="profile.links.github" target="_blank" rel="noreferrer">github</a>
      <a :href="profile.links.linkedin" target="_blank" rel="noreferrer">linkedin</a>
    </nav>

    <div class="top-bar__actions">
      <div class="system-status" title="Portfolio system status">
        <span class="system-status__dot" aria-hidden="true"></span>
        <span>AVAILABLE</span>
      </div>

      <button
        class="mobile-menu-button"
        type="button"
        :class="{ 'mobile-menu-button--open': mobileMenuOpen }"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-primary-navigation"
        :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="mobile-navigation"
          @click.self="closeMobileMenu"
        >
          <nav
            id="mobile-primary-navigation"
            class="mobile-navigation__panel"
            aria-label="Mobile navigation"
          >
          <div class="mobile-navigation__header">
            <span>portfolio_navigation</span>
            <small>SELECT DESTINATION</small>
          </div>

          <a
            v-for="(item, index) in portfolioSections"
            :key="item.label"
            class="mobile-navigation__link"
            :href="item.target"
            @click="navigateToSection(item)"
          >
            <span class="mobile-navigation__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span>{{ item.label }}</span>
            <span class="mobile-navigation__arrow">→</span>
          </a>

          <div class="mobile-navigation__external">
            <a
              :href="profile.links.resumePdf"
              target="_blank"
              rel="noreferrer"
              @click="closeMobileMenu"
            >
              Résumé ↗
            </a>
            <a
              :href="profile.links.github"
              target="_blank"
              rel="noreferrer"
              @click="closeMobileMenu"
            >
              GitHub ↗
            </a>
            <a
              :href="profile.links.linkedin"
              target="_blank"
              rel="noreferrer"
              @click="closeMobileMenu"
            >
              LinkedIn ↗
            </a>
          </div>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
