export default [
    {
      path: "/:catchAll(.*)",
      name: "error",
      meta: {
        title: "404-页面不存在",
      },
      component: () => import("@/views/error/ErrorPage.vue"),
    },
    {
      path: "/",
      redirect: "/home",
      meta: {
        title: "SDGs_DAS_Platform",
      },
    },
    {
      path: "/home",
      meta: {
        title: "SDGs_DAS_Platform",
      },
      component: () => import("@/views/home/Home.vue"),
    },
]