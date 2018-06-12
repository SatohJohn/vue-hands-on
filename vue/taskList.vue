<template>
    <ul>
        <router-link :to="{ name: 'detail'}" tag="li" v-for="task in tasks" keys="task.id">{{task.name}} <span @click="removeTask(task)">×</span></router-link>
    </ul>
</template>

<script>
    export default {
        methods: {
            removeTask(task) {
                this.$emit('removeTask', task);
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