<script setup lang="ts">
import { DATABASE_INJECTOR } from "@/shared";
import { provide } from "vue";
import { ChronikDatabase } from "~~/shared/database";

if (!process.server) {
  const dexie = new ChronikDatabase();
  provide(DATABASE_INJECTOR, dexie);
}
</script>

<template>
  <slot></slot>
</template>
