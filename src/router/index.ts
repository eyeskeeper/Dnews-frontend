import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "basicLayout",
    component: () => import("@/layouts/BasicLayout.vue"),
    redirect: "/mainNew",
    children: [
      {
        path: "/mainNew",
        name: "mainNew",
        component: () => import("@/views/main/MainNews.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginPage.vue"),
      },
      {
        path: "/uploadPage",
        name: "uploadPage",
        component: () => import("@/views/main/UploadPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
