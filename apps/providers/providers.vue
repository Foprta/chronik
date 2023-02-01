<script setup lang="ts">
import DatabaseProvider from "./database-provider.vue";
</script>

<template>
  <DatabaseProvider>
    <slot></slot>
  </DatabaseProvider>
</template>
