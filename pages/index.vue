<script setup lang="ts">


const name = ref("");
const db = useDatabase();


console.log(db)


</script>

<template>
    <div>
        index {{ name }}
        <br>
        <input class="mt-6" type="text" v-model="name">
        <br>

        <button @click="db?.addEntity()">add</button>
    </div>
</template>