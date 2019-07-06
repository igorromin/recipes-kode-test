import Vue from 'vue'
import App from './App.vue'
import router from "./router"

Vue.config.productionTip = false

new Vue({
  router,
  mounted() {
    var app = this;

    if ("-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style) { 
        window.addEventListener("hashchange",
            function () {
                /* eslint-disable no-console */
                console.log(app.$router);
                /* eslint-enable no-console */
                var currentPath = window.location.hash.slice(1);
                if (app.$route.path !== currentPath) {
                    app.$router.replace(currentPath);
                    
                    
                }
            },
            false);
    }
},
  render: h => h(App),
}).$mount('#app')
