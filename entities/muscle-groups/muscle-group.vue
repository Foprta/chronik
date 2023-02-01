<script setup lang="ts">
defineProps<{
  name: string;
  color: string;
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <div
      class="rounded-full w-4 h-4 shadow"
      :style="{ backgroundColor: '#' + color }"
    />
    <li>{{ name }}</li>
  </div>
</template>
