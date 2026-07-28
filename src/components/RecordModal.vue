<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { getStatusToneClass } from '../utils/statusTone'

const props = defineProps({
  record: {
    type: Object,
    default: null,
  },
  tableName: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

function closeOnEscape(event) {
  if (event.key === 'Escape' && props.record) {
    emit('close')
  }
}

onMounted(() => window.addEventListener('keydown', closeOnEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', closeOnEscape))
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="record"
        class="modal-backdrop"
        role="presentation"
        @click.self="$emit('close')"
      >
        <article
          class="record-modal"
          :class="getStatusToneClass(record.status)"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`record-${record.id}`"
        >
          <header class="record-modal__header">
            <div>
              <span class="record-modal__table">{{ tableName }}</span>
              <h3 :id="`record-${record.id}`">{{ record.name }}</h3>
            </div>
            <button class="icon-button" type="button" aria-label="Close record" @click="$emit('close')">
              ×
            </button>
          </header>

          <div class="record-modal__meta">
            <span><b>record_id</b> {{ record.id }}</span>
            <span><b>domain</b> {{ record.domain }}</span>
            <span>
              <b>status</b>
              <strong class="status-badge">{{ record.status }}</strong>
            </span>
          </div>

          <div class="record-modal__body">
            <section>
              <h4>record_description</h4>
              <p>{{ record.details }}</p>
            </section>

            <section>
              <h4>selected_evidence</h4>
              <ul>
                <li v-for="item in record.highlights" :key="item">{{ item }}</li>
              </ul>
            </section>

            <section>
              <h4>technology_tags</h4>
              <div class="tag-list">
                <span v-for="item in record.stack" :key="item" class="tag">{{ item }}</span>
              </div>
            </section>
          </div>

          <footer class="record-modal__footer">
            <code>1 row returned</code>
            <button class="button button--secondary" type="button" @click="$emit('close')">
              Close record
            </button>
          </footer>
        </article>
      </div>
    </Transition>
  </Teleport>
</template>
