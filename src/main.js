import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from "vue-router";
import routerConfig from "./router.config";

Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

router.beforeEach((to, from, next) => {
    // 正则匹配路由的格式
    if(/\/teacher\/n*/g.test(to.path) || /\/student\/n*/g.test(to.path) || /\/admin\/n*/g.test(to.path)) {
        if(sessionStorage.token) {
            next();
        } else {
            alert("请先登录");
            next('/');
        }
    } else {
        next();
    }
});
Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App),
    router,
}).$mount('#app')
