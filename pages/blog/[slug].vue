<template>
  <div>
    <p> {{ $route.params.slug }} </p>
    <div v-if="data?.content" v-html="html" class="prose" />
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'
import type { Blog } from '~/utils/types'
const route = useRoute()
const { data, error } = await useFetch<Blog>(`/api/blog/${route.params.slug}`)

if (error.value) {
  throw createError({ statusCode: error.value.statusCode ?? 500, message: error.value.message, fatal: true })
}

const content = computed(() => data.value?.content ?? "")
const html = computed(() => marked(content.value))
</script>

<style scoped></style>
