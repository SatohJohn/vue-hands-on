<template>
    <section>
        <h2>{{task.name}}</h2>
        <button @click="removeTask">このタスクを削除する</button>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                task: {}
            }
        },
        created() {
            this.task = this.$store.getters.getTask(this.id);
        },
        methods: {
            removeTask() {
                this.$store.dispatch('removeTask', {
                    task: this.task
                }).then(() => {
                    this.$router.push({name: 'todo'});
                }).catch((message) => {
                    alert('エラーだ');
                })
            }
        },
        props: {
            id: {
                type: [String, Number]
            }
        }
    }
</script>