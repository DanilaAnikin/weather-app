<template>
    <div class="p-4 bg-white rounded-lg shadow-md w-80">
      <h2 class="text-xl font-bold">{{ weather.name }}</h2>
      <div class="text-sm text-gray-500 mb-2">{{ country }}</div>
      <div class="text-4xl font-semibold">{{ weather.current_weather.temperature }}°C</div>
      <div class="text-gray-600">Wind: {{ weather.current_weather.windspeed }} km/h</div>
      <div class="mt-2 text-sm">Date: {{ time }}</div>
    </div>
</template>

<script setup lang="ts">
import { format } from 'date-fns';

const props = defineProps<{ weather: any, country: string }>();

const formatTime = (time: string) => {
    const date = new Date(time);
    const formattedDate = format(date, "MMMM dd, yyyy");
    
    return formattedDate;
}

const time = formatTime(props.weather.current_weather.time);
</script>