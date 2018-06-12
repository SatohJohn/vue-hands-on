<template>
    <main>
        <h1>TODO</h1>
        <TaskListComponent :tasks="tasks" @removeTask="removeTask" />
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
                tasks: [
                    new Task('vueファイルを修正する'),
                    new Task('タスクを追加する機能を追加する'),
                    new Task('タスクを削除する機能を追加する'),
                    new Task('componentを分ける')
                ],
                taskName: ''
            }
        },
        methods: {
            addTask() {
                this.tasks.push(new Task(this.taskName));
                this.taskName = '';
            },
            removeTask(task) {
                this.tasks = this.tasks.filter(t => !t.equals(task));
            }
        }
    }
</script>