<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import RecordModal from './RecordModal.vue'
import { getStatusToneClass } from '../utils/statusTone'

const props = defineProps({
  schemas: {
    type: Array,
    required: true,
  },
})

const activeSchemaId = ref(props.schemas[0]?.id ?? '')
const searchTerm = ref('')
const selectedRecord = ref(null)
const expandedRecordId = ref(null)
const schemaMenuOpen = ref(false)
const isMobile = ref(false)

const activeSchema = computed(
  () => props.schemas.find((schema) => schema.id === activeSchemaId.value) ?? props.schemas[0],
)

const filteredRecords = computed(() => {
  const records = activeSchema.value?.records ?? []
  const query = searchTerm.value.trim().toLowerCase()

  if (!query) return records

  return records.filter((record) => {
    const haystack = [
      record.id,
      record.name,
      record.domain,
      record.status,
      record.summary,
      record.details,
      ...(record.stack ?? []),
      ...(record.highlights ?? []),
    ]
      .join(' ')
      .toLowerCase()

    return haystack.includes(query)
  })
})

const activeStatuses = computed(() => {
  const statuses = activeSchema.value?.records?.map((record) => record.status) ?? []
  return [...new Set(statuses)]
})

const queryText = computed(() => {
  const table = activeSchema.value?.table ?? 'portfolio'
  const filter = searchTerm.value.trim()

  if (!filter) {
    return `SELECT * FROM ${table} ORDER BY record_id;`
  }

  return `SELECT * FROM ${table} WHERE searchable_text LIKE '%${filter.replaceAll("'", "''")}%' ORDER BY record_id;`
})

function updateViewport() {
  isMobile.value = window.matchMedia('(max-width: 900px)').matches

  if (!isMobile.value) {
    schemaMenuOpen.value = true
    expandedRecordId.value = null
  } else {
    schemaMenuOpen.value = false
    selectedRecord.value = null
  }
}

function setActiveSchema(schemaId) {
  activeSchemaId.value = schemaId
  searchTerm.value = ''
  selectedRecord.value = null
  expandedRecordId.value = null

  if (isMobile.value) {
    schemaMenuOpen.value = false
  }
}

function openRecord(record) {
  if (isMobile.value) {
    expandedRecordId.value = expandedRecordId.value === record.id ? null : record.id
    return
  }

  selectedRecord.value = record
}

function handleSchemaNavigation(event) {
  const schemaId = event.detail?.schemaId

  if (!schemaId || !props.schemas.some((schema) => schema.id === schemaId)) {
    return
  }

  setActiveSchema(schemaId)

  window.requestAnimationFrame(() => {
    document.querySelector('#database')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
  window.addEventListener('portfolio:navigate-schema', handleSchemaNavigation)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewport)
  window.removeEventListener('portfolio:navigate-schema', handleSchemaNavigation)
})
</script>

<template>
  <section id="database" class="database-section" aria-labelledby="database-heading">
    <div class="section-heading">
      <div>
        <p class="eyebrow">PORTFOLIO_DATABASE / PUBLIC_SCHEMA</p>
        <h2 id="database-heading">Explore the records</h2>
      </div>
      <p>
        Selected production work is intentionally generalized to protect proprietary data,
        client information, and internal architecture.
      </p>
    </div>

    <div class="database-app">
      <aside class="schema-panel" aria-label="Portfolio tables">
        <div class="window-chrome">
          <span class="window-chrome__title">schema_browser</span>
          <span class="window-chrome__meta">ONLINE</span>
        </div>

        <button
          class="schema-panel__mobile-toggle"
          type="button"
          :aria-expanded="schemaMenuOpen"
          aria-controls="portfolio-schema-list"
          @click="schemaMenuOpen = !schemaMenuOpen"
        >
          <span>
            <small>active table</small>
            <strong>{{ activeSchema.label }}</strong>
          </span>
          <span class="schema-panel__toggle-icon" :class="{ 'schema-panel__toggle-icon--open': schemaMenuOpen }">
            ⌄
          </span>
        </button>

        <div class="schema-panel__database">
          <span class="tree-caret">▼</span>
          <span class="database-icon" aria-hidden="true">◉</span>
          <strong>vincent_portfolio</strong>
        </div>

        <div
          id="portfolio-schema-list"
          class="schema-panel__tables"
          :class="{ 'schema-panel__tables--open': schemaMenuOpen }"
        >
          <button
            v-for="schema in schemas"
            :key="schema.id"
            class="schema-button"
            :class="{ 'schema-button--active': schema.id === activeSchemaId }"
            type="button"
            @click="setActiveSchema(schema.id)"
          >
            <span class="schema-button__icon" aria-hidden="true">▦</span>
            <span>
              <strong>{{ schema.label }}</strong>
              <small>{{ schema.records.length }} rows</small>
            </span>
          </button>
        </div>

        <div class="schema-panel__footer">
          <span class="system-status__dot" aria-hidden="true"></span>
          <span>connection encrypted</span>
        </div>
      </aside>

      <div class="table-workspace">
        <div class="table-toolbar">
          <div>
            <span class="table-toolbar__title">{{ activeSchema.table }}</span>
            <span class="table-toolbar__description">{{ activeSchema.description }}</span>
          </div>

          <label class="search-field">
            <span class="sr-only">Search current table</span>
            <span aria-hidden="true">⌕</span>
            <input
              v-model="searchTerm"
              type="search"
              :placeholder="`Search ${activeSchema.label}...`"
            />
          </label>
        </div>

        <div class="query-console">
          <span class="query-console__prompt">mysql&gt;</span>
          <code>{{ queryText }}</code>
        </div>

        <div class="status-legend" aria-label="Status color key">
          <span class="status-legend__label">status groups:</span>
          <span
            v-for="status in activeStatuses"
            :key="status"
            class="status-badge"
            :class="getStatusToneClass(status)"
          >
            {{ status }}
          </span>
        </div>

        <div class="table-scroll" tabindex="0" aria-label="Portfolio records">
          <table class="data-table">
            <thead>
              <tr>
                <th>record_id</th>
                <th>name</th>
                <th>domain</th>
                <th>status</th>
                <th>summary</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="record in filteredRecords" :key="record.id">
                <tr
                  class="data-record"
                  :class="[
                    getStatusToneClass(record.status),
                    { 'data-record--expanded': expandedRecordId === record.id },
                  ]"
                  tabindex="0"
                  role="button"
                  :aria-label="`${expandedRecordId === record.id ? 'Collapse' : 'Open'} ${record.name}`"
                  :aria-expanded="isMobile ? expandedRecordId === record.id : undefined"
                  @click="openRecord(record)"
                  @keydown.enter="openRecord(record)"
                  @keydown.space.prevent="openRecord(record)"
                >
                  <td data-label="record_id"><code>{{ record.id }}</code></td>
                  <td data-label="name" class="data-record__name">
                    <strong>{{ record.name }}</strong>
                    <span class="row-open-hint">
                      {{ isMobile && expandedRecordId === record.id ? 'collapse ↑' : 'expand ↓' }}
                    </span>
                  </td>
                  <td data-label="domain">{{ record.domain }}</td>
                  <td data-label="status">
                    <span class="status-badge">{{ record.status }}</span>
                  </td>
                  <td data-label="summary">{{ record.summary }}</td>
                </tr>

                <tr
                  v-if="isMobile && expandedRecordId === record.id"
                  class="mobile-record-details"
                  :class="getStatusToneClass(record.status)"
                >
                  <td colspan="5">
                    <div class="mobile-record-details__body">
                      <div class="mobile-record-details__meta">
                        <span><b>record_id</b>{{ record.id }}</span>
                        <span><b>domain</b>{{ record.domain }}</span>
                        <span>
                          <b>status</b>
                          <strong class="status-badge">{{ record.status }}</strong>
                        </span>
                      </div>

                      <section>
                        <h3>record_summary</h3>
                        <p>{{ record.summary }}</p>
                      </section>

                      <section>
                        <h3>record_description</h3>
                        <p>{{ record.details }}</p>
                      </section>

                      <section>
                        <h3>selected_evidence</h3>
                        <ul>
                          <li v-for="item in record.highlights" :key="item">{{ item }}</li>
                        </ul>
                      </section>

                      <section>
                        <h3>technology_tags</h3>
                        <div class="tag-list">
                          <span v-for="item in record.stack" :key="item" class="tag">{{ item }}</span>
                        </div>
                      </section>
                    </div>
                  </td>
                </tr>
              </template>

              <tr v-if="filteredRecords.length === 0">
                <td colspan="5" class="empty-state">
                  0 rows returned. Try a broader search.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <footer class="table-footer">
          <span>{{ filteredRecords.length }} row{{ filteredRecords.length === 1 ? '' : 's' }} returned</span>
          <span>{{ isMobile ? 'Tap a record to expand' : 'Click a row for nested details' }}</span>
        </footer>
      </div>
    </div>

    <RecordModal
      v-if="!isMobile"
      :record="selectedRecord"
      :table-name="activeSchema.table"
      @close="selectedRecord = null"
    />
  </section>
</template>
