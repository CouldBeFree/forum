<template>
    <v-list two-line>
        <template v-for="(item, index) in items">
            <v-subheader
                    :key="item.id * Math.random()"
            >
                {{item.name}}
                <!--<nuxt-link
                        to="/posts"
                        @click="getId(item.id)"
                >{{item.name}}
                </nuxt-link>-->
            </v-subheader>
            <v-divider></v-divider>
        </template>
    </v-list>
</template>

<script>
    import axios from '~/plugins/axios';

    export default {
        async asyncData({params}){
            console.log(params.id);
            const response = await axios.get(`/category?name=${params.id}`);
            const items = response.data;
            //console.log(items);
            return {items};
        }
    }
</script>

<style scoped>

</style>
