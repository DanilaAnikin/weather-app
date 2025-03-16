<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <WeatherInput @search="getWeather" />
    <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
    <WeatherCard v-if="weather" :weather="weather" :country="country" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WeatherInput from './components/WeatherInput.vue';
import WeatherCard from './components/WeatherCard.vue';
import { fetchWeather } from './services/weather';

const weather = ref(null);
const country = ref('');
const error = ref('');

const getWeather = async (city: string) => {
  try {
    const data = await fetchWeather(city);

    weather.value = data.weatherData;
    country.value = data.country;
    error.value = '';
  } catch (err: any) {
    error.value = err.message;
    weather.value = null;
  }
};
</script>
