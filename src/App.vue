<script setup>
</script>

<template>
  <div class="bg-gray h-30">   
  <header class="bg-white-100 flex pt-4 justify-between">
    <router-link :to="{ name: 'home'}" class="justify-left text-orange-500 text-2xl font-extrabold mx-7">Home</router-link>
    <div class="">
      <router-link :to="{ name: 'byName' }" class="p-6 hover:bg-orange-400 h-full">Search Meals</router-link>
      <router-link :to="{ name: 'byLetter' }"  class="p-6 hover:bg-orange-400 h-full">Meals By Letter</router-link>
      <!-- <router-link :to="{ name: 'byIngredient' }" class="px-6 hover:bg-purple-200 h-full">Meals By Ingredients</router-link> -->

    </div>
  </header>
  <main>
    <router-view />
  </main>
  </div>

  
</template>

<style scoped>

</style>
