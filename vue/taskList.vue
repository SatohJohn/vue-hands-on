<template>
    <ul>
        <li v-for="task in tasks" keys="task.id"><router-link :to="{ name: 'detail', params:{id: task.id} }" tag="span" >{{task.name}}</router-link> <span @click.self="removeTask(task)">×</span></li>
    </ul>
</template>

<script>
    export default {
        methods: {
            removeTask(task) {
                this.$store.commit('removeTask', {
                    task: task
                });
            }
        },
        props: {
            tasks: {
                type: Array,
                required: true
            }
        }
    }
</script>