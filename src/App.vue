<script setup>
import TopBar from './components/TopBar.vue'
import HeroPanel from './components/HeroPanel.vue'
import DatabaseExplorer from './components/DatabaseExplorer.vue'
import ContactPanel from './components/ContactPanel.vue'
import { metrics, profile, schemas } from './data/portfolio'
</script>

<template>
  <div id="top" class="app-shell">
    <div class="page-grid" aria-hidden="true"></div>
    <TopBar :profile="profile" />

    <main>
      <HeroPanel :profile="profile" :metrics="metrics" />
      <DatabaseExplorer :schemas="schemas" />
      <ContactPanel :profile="profile" />
    </main>

    <footer class="site-footer">
      <div>
        <span class="brand__prompt">&gt;_</span>
        <strong>{{ profile.name }}</strong>
      </div>
      <p>Director of Data & Technology · Data · Infrastructure · Analysis · Leadership</p>
      <div class="site-footer__links">
        <a :href="profile.links.resumePdf" target="_blank" rel="noreferrer">View résumé</a>
        <a href="#contact">Initialize contact</a>
      </div>
    </footer>
  </div>
</template>
