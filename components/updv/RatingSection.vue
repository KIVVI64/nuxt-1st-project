<template>
  <div>
    <h2 class="text-2xl font-semibold mb-2">Ocena szkoły</h2>
    <div class="flex items-center mb-2">
      <span class="text-4xl font-bold mr-2">{{ ratingData.rating }}</span>
      <div class="flex">
        <Icon
          v-for="star in 5"
          :key="star"
          :name="getStarIcon(star)"
          class="text-4xl text-primary pt-1"
        />
      </div>
    </div>
    <p class="text-gray-600">
      Bazując na {{ ratingData.totalRatings }} ocenach
    </p>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const ratingData = reactive({
  rating: 3.4,
  totalRatings: 120,
});

function getStarIcon(star) {
  const roundedRating = Math.round(ratingData.rating * 2) / 2;
  if (star <= roundedRating) {
    return 'ic:baseline-star';
  } else if (star - 0.5 === roundedRating) {
    return 'ic:baseline-star-half';
  } else {
    return 'ic:baseline-star-border';
  }
}
</script>
