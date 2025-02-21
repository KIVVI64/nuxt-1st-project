<template>
  <div>
    <h2 class="text-2xl font-semibold mb-2">Szczegóły</h2>
    <table class="table-auto w-full">
      <tbody>
      <tr class="border-t" v-if="school.checked">
        <td><Icon name="ic:baseline-verified" /></td>
        <td class="py-1">Zweryfikowano</td>
      </tr>
      <tr class="border-t">
        <td><Icon name="ic:baseline-school" /></td>
        <td class="py-1">{{ school.type.charAt(0).toUpperCase() + school.type.slice(1) }}</td>
      </tr>
      <tr class="border-t ">
        <td><Icon name="ic:baseline-web" /></td>
        <td class="py-1"><a :href="school.website" target="_blank">{{ school.website }}</a></td>
      </tr>
      <tr class="border-t">
        <td><Icon name="ic:baseline-mail" /></td>
        <td class="py-1">{{ school.contact }}</td>
      </tr>
      <tr class="border-t">
        <td><Icon name="ic:baseline-map" /></td>
        <td class="py-1">{{ school.woj.charAt(0).toUpperCase() + school.woj.slice(1) }}</td>
      </tr>
      <tr class="border-t">
        <td><Icon name="ic:baseline-location-city" /></td>
        <td class="py-1">{{ school.city }}</td>
      </tr>
      <tr class="border-t">
        <td><Icon name="ic:baseline-location-on" /></td>
        <td class="py-1">{{ school.address }}</td>
      </tr>
      <tr class="border-t" v-if="!school.checked">
        <td><Icon name="ic:baseline-edit" /></td>
        <td class="py-1">Popraw informacje</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { school } = defineProps(['school'])
</script>