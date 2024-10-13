import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    // component: () => import("@/views/LoginPage.vue"),
    // component: () => import("@/views/RegistryPage.vue"),
    children: [
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
