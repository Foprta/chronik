<script setup lang="ts">
import { AddMuscleGroup } from "~~/features/muscle-groups";
import { useMuscleGroups, MuscleGroup } from "~~/entities/muscles";

const { muscleGroups, loadMuscles } = useMuscleGroups();

if (!process.server) {
  loadMuscles();
}
</script>

<template>
  <AddMuscleGroup />

  <ul>
    <MuscleGroup
      v-for="muscle in muscleGroups"
      :key="muscle.id"
      :name="muscle.name"
      :color="muscle.color"
    />
  </ul>
</template>
