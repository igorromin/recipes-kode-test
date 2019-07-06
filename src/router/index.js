import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'home',
            path: "/",
            component: () => import("@/views/Home")
        },
        {
            name: 'detail',
            path: "/detail/:post_id",
            component: () => import("@/views/DetailPage")
        }
    ]
});