<template>
    <div class="flex p-9 w-full">
            <input 
            type="text" 
            class="rounded w-full"
            placeholder="Search your Food" />

    </div>
   
</template>
 

<script setup>
import {onMounted,ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient'


const ingredients = ref([])

onMounted(async ()=>{
    const response = await axiosClient.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    console.log(response)
    ingredients.value = response.data
})
</script>