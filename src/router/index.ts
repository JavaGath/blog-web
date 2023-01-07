import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import BlogView from "../views/BlogView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "blog",
    component: BlogView
  },
  {
    path: "/private",
    name: "private",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PrivateView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
