<template>
  <UPage>
    <UPageBody>

      <div class="error-page">
        <div class="error-content">
          <span class="error-code" :data-text="error.status">{{ error.status }}</span>
          <p class="error-message">{{ message }}</p>
          <a class="btn" @click="handleGoHome">go home</a>
        </div>
      </div>

    </UPageBody>
  </UPage>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import { UPage } from '#components';
import { useTheme } from '@/composables/useTheme'

const props = defineProps<{ error: NuxtError }>()

// error.vue bypasses app.vue, so we need to init the theme here
useTheme()

const message = computed(() => {
  if (props.error.status === 404) return "This page doesn't exist."
  return "Something went wrong."
})

const handleGoHome = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: var(--font-color);
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.error-code {
  position: relative;
  font-size: clamp(5rem, 20vw, 12rem);
  font-weight: 700;
  line-height: 1;
  color: var(--ascend);
  letter-spacing: -0.03em;
  animation: glitch-main 4s infinite;
}

.error-code::before,
.error-code::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  font-weight: inherit;
  font-size: inherit;
  letter-spacing: inherit;
}

.error-code::before {
  color: #00ffff;
  animation: glitch-top 4s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
}

.error-code::after {
  color: #ff00ff;
  animation: glitch-bottom 4s infinite;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
}

@keyframes glitch-main {
  0%, 90%, 100% { transform: translate(0); }
  92%            { transform: translate(-2px, 1px); }
  94%            { transform: translate(2px, -1px); }
  96%            { transform: translate(-1px, 2px); }
  98%            { transform: translate(1px, -2px); }
}

@keyframes glitch-top {
  0%, 90%, 100% { transform: translate(0); opacity: 0; }
  92%            { transform: translate(3px, 0); opacity: 0.8; }
  94%            { transform: translate(-3px, 0); opacity: 0.8; }
  96%            { transform: translate(2px, 0); opacity: 0.8; }
  98%            { transform: translate(0); opacity: 0; }
}

@keyframes glitch-bottom {
  0%, 90%, 100% { transform: translate(0); opacity: 0; }
  92%            { transform: translate(-3px, 0); opacity: 0.8; }
  94%            { transform: translate(3px, 0); opacity: 0.8; }
  96%            { transform: translate(-2px, 0); opacity: 0.8; }
  98%            { transform: translate(0); opacity: 0; }
}

.error-message {
  font-size: 1rem;
  font-weight: 400;
  color: var(--font-color);
  opacity: 0.65;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 42px;
  text-align: center;
  line-height: 1.1;
  background-color: var(--secondary);
  color: var(--white);
  border-radius: 4px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 220ms all ease-in-out;
}

.btn:hover {
  filter: brightness(145%);
  color: var(--white);
}
</style>
