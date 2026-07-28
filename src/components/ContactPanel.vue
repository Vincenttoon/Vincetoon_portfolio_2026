<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  profile: {
    type: Object,
    required: true,
  },
});

const FORM_ENDPOINT = "https://formsubmit.co/ajax/vincenttoon22@gmail.com";

const name = ref("");
const email = ref("");
const subject = ref("Opportunity inquiry");
const message = ref("");
const website = ref("");
const submitState = ref("idle");
const formMessage = ref("");
const copiedEmail = ref(false);

const emailAddress = computed(() =>
  props.profile.links.email.replace(/^mailto:/, ""),
);

const isSending = computed(() => submitState.value === "sending");

const directEmailBody = computed(() => {
  const parts = [];

  if (name.value.trim()) {
    parts.push(`Name: ${name.value.trim()}`);
  }

  if (email.value.trim()) {
    parts.push(`Reply email: ${email.value.trim()}`);
  }

  if (message.value.trim()) {
    if (parts.length) parts.push("");
    parts.push(message.value.trim());
  }

  return parts.join("\n");
});

const gmailComposeUrl = computed(() => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: emailAddress.value,
    su: subject.value || "Portfolio inquiry",
    body: directEmailBody.value,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
});

function validateForm() {
  if (name.value.trim().length < 2) {
    formMessage.value = "Please enter your name.";
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    formMessage.value = "Please enter a valid reply email.";
    return false;
  }

  if (message.value.trim().length < 10) {
    formMessage.value = "Please add a little more detail to your message.";
    return false;
  }

  return true;
}

async function sendMessage() {
  submitState.value = "idle";
  formMessage.value = "";

  if (!validateForm()) return;

  // Honeypot: silently accept likely bot submissions.
  if (website.value.trim()) {
    submitState.value = "success";
    formMessage.value = "Message sent. Thank you.";
    return;
  }

  submitState.value = "sending";
  formMessage.value = "Sending message…";

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim(),
        subject: subject.value,
        message: message.value.trim(),
        _subject: `[Portfolio] ${subject.value}`,
        _template: "table",
        _captcha: "false",
        _honey: website.value,
        page: window.location.href,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (
      !response.ok ||
      result.success === false ||
      result.success === "false"
    ) {
      throw new Error(
        result.message || "The message service returned an error.",
      );
    }

    submitState.value = "success";
    formMessage.value =
      "Message sent successfully. I will get back to you as soon as I can.";

    name.value = "";
    email.value = "";
    subject.value = "Portfolio inquiry";
    message.value = "";
  } catch (error) {
    console.error("Contact form submission failed:", error);
    submitState.value = "error";
    formMessage.value = `The form could not send right now. Please copy ${emailAddress.value} or open Gmail directly.`;
  }
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(emailAddress.value);
    copiedEmail.value = true;

    window.setTimeout(() => {
      copiedEmail.value = false;
    }, 1800);
  } catch {
    formMessage.value = `Email: ${emailAddress.value}`;
  }
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
              <dt>résumé</dt>
              <dd>PDF and Word formats available</dd>
            </div>
          </dl>

          <div class="contact-links">
            <a
              class="button button--primary"
              :href="profile.links.resumePdf"
              target="_blank"
              rel="noreferrer"
            >
              View Résumé
            </a>

            <a
              class="button button--secondary"
              :href="profile.links.resumeDocx"
              download
            >
              Download Word
            </a>

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
              LinkedIn
            </a>
          </div>
        </div>
      </article>

      <form
        class="contact-form"
        :action="`https://formsubmit.co/${emailAddress}`"
        method="POST"
        @submit.prevent="sendMessage"
      >
        <div class="window-chrome">
          <span class="window-chrome__title">send_message.sql</span>
          <span class="window-chrome__meta">DIRECT_SEND</span>
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
                required
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
                required
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
              placeholder="'What's on your mind?' - Facebook (2009-Present) …"
              required
            ></textarea>
          </label>

          <label class="contact-form__honeypot" aria-hidden="true">
            Website
            <input
              v-model="website"
              name="_honey"
              tabindex="-1"
              autocomplete="off"
            />
          </label>

          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <div class="contact-form__actions">
            <button
              class="button button--primary"
              type="submit"
              :disabled="isSending"
            >
              {{ isSending ? "Sending…" : "Send message" }}
            </button>

            <a
              class="button button--ghost"
              :href="gmailComposeUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email with Gmail
            </a>
          </div>

          <small class="contact-form__privacy">
            This static site uses FormSubmit to deliver messages. The Gmail
            option opens a prepared message in a new browser tab. Please do not
            include passwords, private records, or other sensitive information.
          </small>

          <p
            v-if="formMessage"
            class="contact-form__message"
            :class="{
              'contact-form__message--success': submitState === 'success',
              'contact-form__message--error': submitState === 'error',
            }"
            aria-live="polite"
          >
            {{ formMessage }}
          </p>
        </div>
      </form>
    </div>
  </section>
</template>
