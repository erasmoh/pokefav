import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import PokeList from "@/views/PokeList";
import PokeFav from "@/views/PokeFav";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokelist",
    name: "PokeList",
    component: PokeList,
  },
  {
    path: "/pokefav",
    name: "PokeFav",
    component: PokeFav,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
