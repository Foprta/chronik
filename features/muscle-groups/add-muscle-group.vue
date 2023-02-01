<script setup lang="ts">
import { ref } from "vue";
import { useMuscleGroups } from "~~/entities/muscles";

const { addMuscleGroup } = useMuscleGroups();

const newMuscleGroupName = ref("");
</script>

<template>
  <div>
    <input v-model="newMuscleGroupName" class="mt-2" type="text" />
    <br />

    <button @click="addMuscleGroup(newMuscleGroupName)">add</button>
  </div>
</template>
