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
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
