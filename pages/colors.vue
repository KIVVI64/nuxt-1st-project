<template>
  <div>
    <div class="mt-7 text-center">
      <h1 class="text-5xl">Monstera Unique</h1>
    </div>
    <div class="w-2/3 mx-auto mt-7">
      <NuxtImg
        class="rounded-3xl"
        src="https://a.allegroimg.com/original/1175d6/13a10b384e2c850219e17072e29e/Monstera-Deliciosa-Piekna-DUZA-50-cm"
        alt="Monstera"
      />
    </div>
    <div class="md:mx-auto">
      <div class="mt-7 flex overflow-x-auto space-x-4">
        <div v-for="p in plantInfos" class="w-40 flex-shrink-0 p-4 bg-tertiary-container rounded-2xl">
          <Icon :name="p.icon" class="mt-1 text-3xl" />
          <span class="block mt-2 text-lg font-medium">{{ p.title }}</span>
          <span class="block mt-1 text-md leading-5">{{ p.content }}</span>
        </div>
      </div>
    </div>

    <div class="container mt-7">
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

    <div class="container mt-7">
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

    <div class="container mt-7">
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
  }
]
</script>

<style scoped></style>
