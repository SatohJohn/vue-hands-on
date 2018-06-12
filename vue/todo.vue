<template>
    <main>
        <h1>TODO</h1>
        <TaskListComponent :tasks="$store.state.tasks" />
        <input type="text" v-model="taskName">
        <button @click="addTask">タスクを追加する</button>
    </main>
</template>

<script>
    import {Task} from '../js/task.js';
    import TaskListComponent from './taskList.vue';
    export default {
        components: {
            TaskListComponent
        },
        data() {
            return {
                taskName: ''
            }
        },
        methods: {
            addTask() {
                this.$store.commit('addTask', {
                    name: this.taskName
                })
                this.taskName = '';
            }
        }
    }
</script>