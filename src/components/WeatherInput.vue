<template>
    <div class="mb-4">
      <input v-model="city" @keyup.enter="onSearch" type="text" autofocus placeholder="Enter city" class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button @click="onSearch" class="ml-2 p-2 bg-blue-500 text-white rounded-md">Search</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{ (e: 'search', city: string): void }>();

const city = ref('');

const onSearch = () => {
    if (city.value) {
      emit('search', city.value);
    }
};
</script>
  