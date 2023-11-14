<template>
    <div class="flex p-9 w-full">
            <input 
            type="text" 
            v-model="keyword"
            class="rounded w-full"
            placeholder="Search your Meals" 
            @change="searchMeals"/>

    </div>
    <div class="grid grid-cols-3">
       <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
</template>

<script setup>
import store from '../store';
import { onMounted, ref } from 'vue';  
import { computed } from '@vue/reactivity'
import { useRoute } from "vue-router"
import MealItem from '../components/MealItem.vue'


const route = useRoute();
const keyword = ref([])
const meals = computed(()=> store.state.searchedMeals)

const searchMeals = () =>{
    store.dispatch('searchMeals', keyword.value)
}

onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals();
    }
})
</script>