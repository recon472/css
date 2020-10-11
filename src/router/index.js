import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/button",
    component: () => import("../views/Button.vue")
  },
  {
    path: "/breadcrumb",
    component: () => import("../views/Breadcrumb.vue")
  },
  {
    path: "/card",
    component: () => import("../views/Card.vue")
  },
  {
    path: "/collection",
    component: () => import("../views/Collection.vue")
  },
  {
    path: "/dropdown",
    component: () => import("../views/Dropdown.vue")
  },
  {
    path: "/form",
    component: () => import("../views/Form.vue")
  },
  {
    path: "/stack",
    component: () => import("../views/Stack.vue")
  },
  {
    path: "/navbar",
    component: () => import("../views/Navbar.vue")
  },
  {
    path: "/notification",
    component: () => import("../views/Notification.vue")
  },
  {
    path: "/overlay",
    component: () => import("../views/Overlay.vue")
  },
  {
    path: "/pane",
    component: () => import("../views/Pane.vue")
  },
  {
    path: "/section",
    component: () => import("../views/Section.vue")
  },
  {
    path: "/table",
    component: () => import("../views/Table.vue")
  },
  {
    path: "/variables",
    component: () => import("../views/Variables.vue")
  },
  {
    path: "/helpers",
    component: () => import("../views/Helpers.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
