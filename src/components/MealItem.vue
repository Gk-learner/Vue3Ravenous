<template>
    <div class="bg-white"> 
        <router-link :to="{ name: 'mealDetails', params: {id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class=" max-w-80 p-3"/>
</router-link>
        <h3 class="font-bold p-4">{{ meal.strMeal }}</h3>
        <div class="p-4 ">
            <a :href="meal.strYoutube" target="_blank" class="bg-orange-500 px-4 hover:bg-yellow-600 text-white py-2 rounded">Youtube</a>
        </div>
       </div>
</template>

<script setup>
const { meal } = defineProps({
    meal: Object
})

</script>