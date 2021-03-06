import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import MyTasks from "../views/MyTasks.vue";
import PendingTasks from "../views/PendingTasks.vue";
import CreateNewTask from "../views/CreateNewTask.vue";
import UpdateTask from "../views/UpdateTask.vue";
import TaskDetails from "../views/TaskDetails.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    exact: true,
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    name: "HomePage",
    exact: true,
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/my-tasks",
    name: "MyTasks",
    exact: true,
    component: MyTasks,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/pending-tasks",
    name: "PendingTasks",
    exact: true,
    component: PendingTasks,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/create-new-task",
    name: "CreateNewTask",
    exact: true,
    component: CreateNewTask,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/update-task/:id",
    name: "UpdateTask",
    exact: true,
    component: UpdateTask,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/task/:id",
    name: "TaskDetails",
    exact: true,
    component: TaskDetails,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.state.userInfo.jwtToken.length > 1) {
      next();
    } else {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    }
  } else {
    if (store.state.userInfo.jwtToken.length > 1) {
      if (to.name === "Login") {
        next({ name: "Home" });
      } else {
        next({ path: to.fullPath });
      }
    } else {
      next();
    }
  }
});

export default router;
