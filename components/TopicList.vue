<template>
    <v-list>
        <v-list-tile v-for="item in posts" :key="item.id">
            <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>

    export default {
        props: ['posts']
    }
</script>

<style scoped>

</style>
