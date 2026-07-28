<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});

const name = ref("");
const email = ref("");
const subject = ref("Opportunity inquiry");
const message = ref("");
const copiedEmail = ref(false);
const copiedMessage = ref(false);
const formMessage = ref("");

const emailAddress = computed(() =>
  props.profile.links.email.replace(/^mailto:/, ""),
);

const canSubmit = computed(
  () =>
    name.value.trim().length > 1 &&
    email.value.trim().includes("@") &&
    message.value.trim().length >= 10,
);

const composedBody = computed(() =>
  [
    `Name: ${name.value.trim()}`,
    `Reply email: ${email.value.trim()}`,
    "",
    message.value.trim(),
  ].join("\n"),
);

const mailtoUrl = computed(() => {
  if (!canSubmit.value) return props.profile.links.email;

  return `${props.profile.links.email}?subject=${encodeURIComponent(
    subject.value,
  )}&body=${encodeURIComponent(composedBody.value)}`;
});

const gmailUrl = computed(() => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: emailAddress.value,
    su: subject.value,
    body: composedBody.value,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
});

function validateForm() {
  if (canSubmit.value) {
    formMessage.value = "";
    return true;
  }

  formMessage.value =
    "Please add your name, a valid reply email, and a message to grab my attention.";
  return false;
}

function openDefaultEmail(event) {
  if (!validateForm()) {
    event.preventDefault();
    return;
  }

  formMessage.value =
    "Opening your configured email application. If nothing happens, use Gmail or copy the message instead.";
}

function openGmail(event) {
  if (!validateForm()) {
    event.preventDefault();
    return;
  }

  formMessage.value = "Opening a prepared Gmail message in a new tab…";
}

async function copyText(value, type) {
  try {
    await navigator.clipboard.writeText(value);

    if (type === "email") {
      copiedEmail.value = true;
      window.setTimeout(() => {
        copiedEmail.value = false;
      }, 1800);
    } else {
      copiedMessage.value = true;
      window.setTimeout(() => {
        copiedMessage.value = false;
      }, 1800);
    }
  } catch {
    formMessage.value =
      type === "email"
        ? `Email: ${emailAddress.value}`
        : "Your browser blocked clipboard access. Select and copy the form contents manually.";
  }
}

function copyEmail() {
  copyText(emailAddress.value, "email");
}

function copyPreparedMessage() {
  if (!validateForm()) return;

  const prepared = [
    `To: ${emailAddress.value}`,
    `Subject: ${subject.value}`,
    "",
    composedBody.value,
  ].join("\n");

  copyText(prepared, "message");
}
</script>

<template>
  <section
    id="contact"
    class="contact-section"
    aria-labelledby="contact-heading"
  >
    <div class="section-heading contact-section__heading">
      <div>
        <p class="eyebrow">INSERT INTO new_conversation;</p>
        <h2 id="contact-heading">Start a conversation</h2>
      </div>
      <p>
        Opportunity, collaboration, technical leadership, data strategy,
        architecture, analysis, and all things fun are all good reasons to reach
        out.
      </p>
    </div>

    <div class="contact-grid">
      <article class="contact-console">
        <div class="window-chrome">
          <span class="window-chrome__title">contact_endpoint</span>
          <span class="window-chrome__meta">AVAILABLE</span>
        </div>

        <div class="contact-console__body">
          <p>
            I am most interested in conversations where data, technology,
            people, and practical problem solving overlap.
          </p>

          <dl class="contact-details">
            <div>
              <dt>location</dt>
              <dd>{{ profile.location }}</dd>
            </div>
            <div>
              <dt>email</dt>
              <dd>{{ emailAddress }}</dd>
            </div>
            <div>
              <dt>response_mode</dt>
              <dd>email or LinkedIn</dd>
            </div>
          </dl>

          <div class="contact-links">
            <button
              class="button button--secondary"
              type="button"
              @click="copyEmail"
            >
              {{ copiedEmail ? "Email copied" : "Copy email" }}
            </button>
            <a
              class="button button--ghost"
              :href="profile.links.linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Open LinkedIn
            </a>
            <a
              class="button button--ghost"
              :href="profile.links.github"
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub
            </a>
          </div>
        </div>
      </article>

      <form class="contact-form" @submit.prevent>
        <div class="window-chrome">
          <span class="window-chrome__title">compose_message.sql</span>
          <span class="window-chrome__meta">NO_DATA_STORED</span>
        </div>

        <div class="contact-form__body">
          <div class="contact-form__row">
            <label>
              <span>your_name</span>
              <input
                v-model="name"
                name="name"
                autocomplete="name"
                placeholder="Your name"
              />
            </label>

            <label>
              <span>reply_email</span>
              <input
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label>
            <span>subject</span>
            <select v-model="subject" name="subject">
              <option>Opportunity inquiry</option>
              <option>Speaking or networking</option>
              <option>Data or technology collaboration</option>
              <option>Portfolio inspiration</option>
              <option>General conversation</option>
            </select>
          </label>

          <label>
            <span>message</span>
            <textarea
              v-model="message"
              name="message"
              rows="7"
              placeholder="'What's on your mind?' - Facebook, 2009-Present …"
            ></textarea>
          </label>

          <div class="contact-form__actions contact-form__actions--stacked">
            <a
              class="button button--primary"
              :href="mailtoUrl"
              @click="openDefaultEmail"
            >
              Open email application
            </a>

            <a
              class="button button--secondary"
              :href="gmailUrl"
              target="_blank"
              rel="noreferrer"
              @click="openGmail"
            >
              Compose in Gmail
            </a>

            <button
              class="button button--ghost"
              type="button"
              @click="copyPreparedMessage"
            >
              {{ copiedMessage ? "Message copied" : "Copy prepared message" }}
            </button>
          </div>

          <small class="contact-form__privacy">
            The portfolio does not send or store this form. “Open email
            application” depends on your browser or operating system having a
            mail handler configured. Gmail opens through the web and works
            during local development or after deployment.
          </small>

          <p
            v-if="formMessage"
            class="contact-form__message"
            aria-live="polite"
          >
            {{ formMessage }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
