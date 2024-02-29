<template>
  <div class="content-grid">
    <div class="mt-7 text-center">
      <h1 class="text-5xl">Monstera Unique</h1>
    </div>
    <div class="full-width">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_minmax(auto,_50%)] gap-4">
        <div>
          <div class="w-2/3 mx-auto mt-7">
            <NuxtImg
              class="rounded-3xl"
              src="https://a.allegroimg.com/original/1175d6/13a10b384e2c850219e17072e29e/Monstera-Deliciosa-Piekna-DUZA-50-cm"
              alt="Monstera"
            />
            <div class="mt-7 container">
              <p class="text-lg text-justify">Unleash the extraordinary with Monstera Unique: a botanical masterpiece that adds a touch of jungle allure to your indoor oasis.</p>
            </div>
          </div>
        </div>

        <div class="row-span-2">
          <div class="md:mx-auto full-width">
            <div class="mt-7 flex overflow-x-auto [&>*:first-child]:ml-4">
              <div v-for="p in plantInfos" class="w-40 flex-shrink-0 p-4 mr-4 bg-tertiary-container rounded-2xl">
                <Icon :name="p.icon" class="mt-1 text-3xl" />
                <span class="block mt-2 text-lg font-medium">{{ p.title }}</span>
                <span class="block mt-1 text-md leading-5">{{ p.content }}</span>
              </div>
            </div>
          </div>
          <div class="mt-7 container">
            <h2 class="text-3xl mb-2">Care</h2>
            <ul>
              <li class="pl-5">
                <Icon name="ic:baseline-water" class="text-4xl pb-2 pt-1" />
                <span class="pl-4 mt-2 text-lg">Water every Tuesday</span>
              </li>
              <li class="pl-5">
                <Icon name="ic:baseline-eco" class="text-4xl pb-2 pt-1" />
                <span class="pl-4 mt-2 text-lg">Feed once monthly</span>
              </li>
            </ul>
          </div>
          <div class="mt-7 container">
            <h2 class="text-3xl mb-2">About</h2>
            <ul>
              <li class="pl-5">
                <Icon name="ic:baseline-brightness-7" class="text-4xl pb-2 pt-1" />
                <span class="pl-4 mt-2 text-lg">Moderate light</span>
              </li>
              <li class="pl-5">
                <Icon name="ic:baseline-grass" class="text-4xl pb-2 pt-1" />
                <span class="pl-4 mt-2 text-lg">Slightly dry, well-draining soil</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div>.</div>
        </div>
      </div>
    </div>
    
    <!-- Główna treść -->
    <div v-for="c in careGuide" class="mt-7">
      <h3 class="text-3xl mb-2">{{ c.title}}</h3>
      <p>{{ c.content }}</p>
    </div>



    <div class="mt-7">
      <div class="chip-icon"><Icon name="ic:baseline-star" />Small</div>
      <div class="chip-icon dark:bg-primary-light bg-primary-dark"><Icon name="ic:baseline-check" />Medium</div>
      <div class="chip dark:bg-primary-light bg-primary-dark">Large</div>
      <div class="chip">Extra Large</div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'app'
})
const plantInfos = [
  {
    icon: 'ic:baseline-whatshot',
    title: 'Most Popular',
    content: 'This is a popular plant in our store'
  },
  {
    icon: 'ic:baseline-assignment',
    title: 'Easy Care',
    content: 'This plant is appropriate for beginners'
  },
  {
    icon: 'ic:baseline-forest',
    title: 'Faux Available',
    content: 'Get the same look without the maintenance'
  },
  {
    icon: 'ic:baseline-forest',
    title: 'Faux Available',
    content: 'Get the same look without the maintenance'
  },
  {
    icon: 'ic:baseline-forest',
    title: 'Faux Available',
    content: 'Get the same look without the maintenance'
  }
]
const careGuide = [
  {
    title: '🌿 Introduction',
    content: 'Welcome to the enchanting world of Monstera Unique, a captivating member of the Monstera family. With its distinctively large and ornate leaves, Monstera Unique is a tropical gem that has won the hearts of indoor plant enthusiasts worldwide.'
  },
  {
    title: '🌞 Light Requirements',
    content: 'Monstera Unique thrives in bright, indirect light. Position your plant near a window where it can bask in filtered sunlight. Be cautious about prolonged exposure to direct sunlight, as it can lead to unsightly leaf burns. Find the perfect balance for optimal growth.'
  },
  {
    title: '💧 Watering Routine',
    content: 'Maintaining a consistent watering routine is key to the well-being of your Monstera Unique. Allow the top inch of the soil to dry out before watering, and ensure proper drainage to prevent overwatering. Be mindful of seasonal variations – your plant may require more water during the active growing season and less during its dormant period.'
  },
  {
    title: '🌡️ Temperature and Humidity',
    content: 'Create a warm and humid haven for your Monstera Unique. Aim for temperatures between 65-80°F (18-27°C) and provide regular misting or use a humidifier to maintain optimal humidity levels. Mimicking its native tropical environment will encourage healthy growth and vibrant foliage.'
  },
  {
    title: '🌱 Soil and Fertilization',
    content: 'Choose a well-draining potting mix enriched with organic matter for your Monstera Unique. During the active growing season (spring and summer), feed your plant with a balanced liquid fertilizer every 2-4 weeks. Adjust fertilization frequency during the fall and winter months to support its natural growth cycle.'
  },
  {
    title: '🪞 Pruning and Training',
    content: 'Encourage a bushier and more compact appearance by incorporating regular pruning into your Monstera Unique care routine. Trim long vines and consider using stakes or moss poles for additional support. This not only enhances the plant\'s aesthetics but also promotes better air circulation.'
  },
  {
    title: '🪴 Repotting',
    content: 'As your Monstera Unique matures, plan for repotting every 1-2 years or when roots outgrow the current container. Opt for a slightly larger pot and fresh potting mix to provide ample space for root development. This process helps rejuvenate the soil and ensures continued healthy growth.'
  },
  {
    title: '🐜 Pest Prevention',
    content: 'Vigilance is crucial in preventing common pests such as spider mites and scale insects. Regularly inspect the leaves for any signs of infestation, and if pests are detected, promptly treat them with insecticidal soap or neem oil. A healthy and well-cared-for Monstera Unique is better equipped to resist pests.'
  },
  {
    title: '🌺 Enjoy the Beauty',
    content: 'Sit back, relax, and revel in the beauty of your thriving Monstera Unique. Watch with delight as its intricate leaves unfurl, showcasing unique patterns that make each Monstera Unique an individual masterpiece. Your care and attention will be rewarded with a stunning and visually captivating addition to your indoor plant collection.'
  }
];

</script>

<style scoped></style>
