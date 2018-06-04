<template>
    <main>
        <h1>TODO</h1>
        <ul>
            <li v-for="task in tasks">{{task.name}}</li>
        </ul>
        <input type="text" v-model="taskName">
        <button @click="addTask">タスクを追加する</button>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                tasks: [
                    { name: 'vueファイルを修正する', id: 1 },
                    { name: 'タスクを追加する機能を追加する', id: 2 },
                    { name: 'タスクを削除する機能を追加する', id: 3 },
                    { name: 'componentを分ける', id: 4 }
                ],
                taskName: '',
                nextId: 5
            }
        },
        methods: {
            addTask() {
                this.tasks.push({
                    name: this.taskName,
                    id: this.nextId++
                });
                this.taskName = '';
            }
        }
    }
</script>