<template>
  <UTimeline class="gap-3" :items="items" color="error" size='xs' :ui="{
    date: 'timeline-date-slot-ui',
    indicator: 'timeline-indicator',
    separator: 'timeline-separator',
    container: 'timeline-container'
  }">
    <template #title="{ item }">
      <div class="timeline-title">
        <div>
          <span>{{ item.role }} - {{ item.title }}</span>
        </div>
        <span class="body timeline-date">{{ item.date }}</span>
      </div>
    </template>

    <template #description="{ item }">
      <ul>
        <li class="body" v-for="(bulletPoint, index) in item.description?.split('\n')" :key="index">
          <span>{{ bulletPoint }}</span>
        </li>
      </ul>
    </template>

  </UTimeline>
</template>

<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: "short",
  year: "numeric"
})

const formatDate = (dateRange: [Date, Date]) => {
  const [start, end] = dateRange
  return `${dateFormatter.format(start)} - ${dateFormatter.format(end)}`
}

const formatDescription = (bulletPoints: string[]): string => {
  return bulletPoints.join("\n")
}

const items = ref<TimelineItem[]>([
  {
    date: formatDate([new Date(2022, 8, 1), new Date(2026, 2, 1)]),
    location: 'London, UK',
    title: 'StoryStream',
    role: "Frontend Developer",
    description: formatDescription([
      `Led the incremental migration of a 200k+ line Angular codebase to Vue.js — shipped alongside new features, no freeze, no big-bang cutover.`,
      `Designed an embeddable widget platform (Preact + Zustand) that runs StoryStream content experiences across dozens of client sites with an isolated, lightweight bundle.`,
      `Standardized the team's component library, build tooling (Vite), and testing setup (Vitest) — reducing friction across every PR.`
    ]),
    icon: 'i-lucide-check-circle'
  },
  {
    date: formatDate([new Date(2021, 4, 1), new Date(2022, 7, 1)]),
    location: 'London, UK',
    title: 'CVCosmos',
    role: "Junior Full-Stack Developer",
    description: formatDescription([`Migrated a server-rendered interface to a React SPA, enabling more dynamic workflows for data-heavy screens.`, `Built and maintained Django REST APIs covering auth, validation, and core product functionality.`, `Wrote internal automation scripts to generate test data and streamline local dev setup for the engineering team.`]),
    icon: 'i-lucide-check-circle'
  },
  {
    date: formatDate([new Date(2021, 4, 1), new Date(2022, 7, 1)]),
    location: 'London, UK',
    title: 'Freelance',
    role: "Frontend Developer",
    description: formatDescription([
      `Delivered 3 client projects end-to-end: UI redesign for a logistics platform, portfolio site for a motion designer, and a collaborative platform for a primary school author and illustrator.`,
      `Handled everything from requirements to deployment — React, Vue, Netlify, Contentful`,]),
    icon: 'i-lucide-check-circle'
  },
])
</script>


<style lang="css">
.timeline-date-slot-ui {
  display: none;
}

.timeline-indicator {
  background-color: var(--grey);
  color: var(--font-color);
}

[data-theme="dark"] .timeline-indicator {
  background-color: var(--secondary);
  color: var(--font-color);
}

.timeline-separator {
  background-color: var(--grey);
}

[data-theme="dark"] .timeline-separator {
  background-color: var(--secondary);
}


.body {
  font-size: max(10px, .75rem);
  color: var(--font-color-secondary);
}

ul {
  list-style: initial;
  list-style-type: disc;
  list-style-position: outside;
  display: flex;
  flex-direction: column;
  gap: .2rem;

  li {
    line-height: 18px;
    color: var(--font-color);
  }
}


.timeline-title {
  display: flex;
  flex-direction: column;
  gap: .05rem;

  margin-bottom: .75rem;
  color: var(--font-color);
}

.timeline-container {
  gap: .75rem;
}

.timeline-date {
  font-size: .7rem;
  font-weight: normal;
  opacity: .55;
}
</style>
