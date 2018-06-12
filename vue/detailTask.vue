<template>
    <section>
        <h2>{{task.name}}</h2>
    </section>
</template>

<script>
    export default {
        data: {
            task: {}
        },
        created() {
            this.task = this.$store.getters.getTask(this.id);
        },
        props: {
            id: {
                type: String
            }
        }
    }
</script>