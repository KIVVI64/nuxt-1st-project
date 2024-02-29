<template>
  <div class="container">
    <h1 class="text-6xl text-center my-7">Jan Kowalski</h1>
    <h2 class="text-lg font-medium uppercase">Informacje</h2>
    <ul class="text-xl font-medium">
      <li>Przedmioty: Fizyka, Matematyka</li>
      <li>Stopień: Magister Sztuki</li>
      <li>Doświadczenie: od 2012r</li>
    </ul>
    <div class="my-7"></div>
    <h2 class="text-lg font-medium uppercase">Informacje</h2>
    <div class="grid grid-cols-2 text-xl font-medium">
      <div>Przedmioty:</div><div>Fizyka, Matematyka</div>
      <div>Stopień:</div><div>Magister Sztuki</div>
      <div>Doświadczenie:</div><div>od 2012r</div>
    </div>
    <div class="my-7"></div>
    <h2 class="text-lg font-medium uppercase pb-2 pl-4">Informacje</h2>
    <table class="text-lg w-full">
      <tr class="border-y">
        <td class="px-4 py-2">Przedmioty</td> <td class="px-5 py-2">Fizyka, Matematyka</td>
      </tr>
      <tr class="border-y">
        <td class="px-4 py-2">Stopień</td><td class="px-5 py-2">Magister Sztuki</td>
      </tr>
      <tr class="border-y">
        <td class="px-4 py-2">Doświadczenie</td><td class="px-5 py-2">od 2012r</td>
      </tr>
    </table>
    
    <div class="my-7"></div>
    <h2 class="text-lg font-medium uppercase pb-2 pl-4">Powiedzenia</h2>
    <ul class="text-lg">
      <li class="border-l-4 border-primary pl-3 mb-1">Nie od razu Rzym zbudowano</li>
      <li class="border-l-4 border-primary pl-3 mb-1">Pi razy oko</li>
      <li class="border-l-4 border-primary pl-3 mb-1">Tam są drzwi</li>
    </ul>

    <div class="my-7"></div>
    <h2 class="text-lg font-medium uppercase pb-2 pl-4">Opinie uczniów i rodziców</h2>
    <ul class="text-lg">
      <li class="border-l-4 border-primary pl-3 mb-1"><div>Twardy i merytoryczny nayczyciel, docenicie po latach.</div>  <div class="text-right text-sm">uczeń - Jakub Grochowski</div></li>
      <li class="border-l-4 border-primary pl-3 mb-1"><div>Świetny nauczyciel, ma swoje specyficzne metody nauczania.</div>  <div class="text-right text-sm">uczeń - Bartłomiej Patkowski</div></li>
      <li class="border-l-4 border-primary pl-3 mb-1"><div>Tragedia</div>  <div class="text-right text-sm">rodzic - Marta G</div></li>
    </ul>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'app'
})
</script>

<style scoped>

</style>