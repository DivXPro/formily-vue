import Vue from 'vue';
import VueRx from 'vue-rx';
import ElementUI from 'element-ui-divxpro';
import 'element-ui-divxpro/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRx);
Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
