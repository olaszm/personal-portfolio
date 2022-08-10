import { createRouter, createWebHistory } from "vue-router";
import MyHome from "../views/MyHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MyHome,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyAbout.vue"),
  },
  {
    path: "/work",
    name: "Project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyProject.vue"),
  },
  // {
  //   path: "/project/:name",
  //   name: "ProjectView",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ProjectView.vue"),
  // },
  {
    // path: "*",
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ '../views/PageNotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes,
});

export default router;
