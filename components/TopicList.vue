<template>
    <v-list two-line>
        <template v-for="(item, index) in posts">
            <v-subheader
            :key="item.id">
                {{item.name}}
            </v-subheader>
            <v-divider v-if="index != arrayLength" :key="item.id"></v-divider>
        </template>
    </v-list>
</template>

<script>

    export default {
        props: ['posts'],
        data(){
            return{
                arrayLength: this.posts.length - 1
            }
        }
    }
</script>

<style scoped>

</style>
