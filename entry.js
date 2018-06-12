import Vue from 'Vue';
import VueRouter from 'vue-router';
import ToDo from './vue/todo.vue';
import DetailTask from './vue/detailTask.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/todo' },
        { path: '/todo', name: 'todo', component: ToDo },
        { path: '/detail/:id', name: 'detail', component: DetailTask, props: true }
    ]});

new Vue({
    router,
    render: h => h('router-view') 
}).$mount(document.body);