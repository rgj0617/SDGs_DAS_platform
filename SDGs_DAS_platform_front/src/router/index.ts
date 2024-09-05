/**
 * tips:只管理路由配置，包括路由设置，路由守卫等
 * date:2024/9/4
 * author:rgj
 */
import {
    createRouter,
    createWebHashHistory,
  } from "vue-router";
import routes from "./routes";


const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
// 根据meta中的title属性，设置页面标题
router.beforeEach((to, _from, next) => {
    document.title = to.meta.title as string || "Default Title";
    next();
  });

export default router;