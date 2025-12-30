<template>
    <div>
        <pre class="pre"><code :class="languageHighlight">{{ serializedText }}</code></pre>
    </div>
</template>

<script lang="ts" setup>
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

const props = defineProps({
    lang: {
        type: String,
        default: 'js',
    },
    text: {
        type: String,
        required: true,
    }
})

const languageHighlight = computed(() => `language-${props.lang}`)
const serializedText = computed(() => {
    return props.text.replaceAll('<', '&lt;').replaceAll('&', '&amp;').trim();
});

onMounted(() => {
    Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
})
</script>

<style scoped>
.pre {
  background-color: #4A5859;
  border-radius: 8px;
  padding: 16px 12px;
  font-size: 0.8rem;
  overflow-x: scroll;
}


.pre::first-line {
    margin-left: 0;
}

</style>
