import Vue from 'Vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import ToDo from './vue/todo.vue';
import DetailTask from './vue/detailTask.vue';
import {Task} from './js/task.js';

Vue.use(Vuex)
Vue.use(VueRouter);

const store = new Vuex.Store({
    state: {
        tasks: [
            new Task('vueファイルを修正する'),
            new Task('タスクを追加する機能を追加する'),
            new Task('タスクを削除する機能を追加する'),
            new Task('componentを分ける')
        ]
    },
    mutations: {
        addTask(state, params) {
            state.tasks.push(new Task(params.name));
        },
        removeTask(state, params) {
            state.tasks = state.tasks.filter(t => !t.equals(params.task));
        }
    },
    actions: {
        removeTask({state}, params) {
            return new Promise((resolve, reject) => {
                if (state.tasks.find(t => t.equals(params.task)) == null) {
                    reject();
                } else {
            state.tasks = state.tasks.filter(t => !t.equals(params.task));
                    resolve();
                }
            })
        }
    },
    getters: {
        getTask(state) {
            return (id) => state.tasks.find(t => t.id == id);
        }
    }
});

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/todo' },
        { path: '/todo', name: 'todo', component: ToDo },
        { path: '/detail/:id', name: 'detail', component: DetailTask, props: true }
    ]});

new Vue({
    router,
    store,
    render: h => h('router-view') 
}).$mount(document.body);