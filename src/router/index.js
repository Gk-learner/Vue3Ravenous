import { createRouter, createWebHistory } from "vue-router";
import Home from  '../views/Home.vue'
import MealByIngredient from '../views/MealByIngredient.vue'
import MealByLetter from '../views/MealByLetter.vue'
import MealByName from '../views/MealByName.vue'
import MealDetails from '../views/MealDetails.vue'


const routes = [
  {
    path: "/Vue3Ravenous",
    name: "home",
    component: Home,
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: MealByName,
  },
  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: MealByLetter,
  },
  {
    path: "/by-ingredient/:ingredient?",
    name: "byIngredient",
    component: MealByIngredient,
  },
  {
    path: "/meal/:id?",
    name: "mealDetails",
    component: MealDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
