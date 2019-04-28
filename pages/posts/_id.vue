<template>
    <div>
        <h3 class="subheading">{{items[0].name}}</h3>
        <v-list two-line>
            <template v-for="item in items[0].posts">
                <v-subheader
                        :key="item.id * Math.random()"
                >
                    {{item.title}}
                    <!--<nuxt-link
                            to="/posts"
                            @click="getId(item.id)"
                    >{{item.name}}
                    </nuxt-link>-->
                </v-subheader>
                <v-divider></v-divider>
            </template>
        </v-list>
    </div>
</template>

<script>
    import axios from '~/plugins/axios';

    export default {
        async asyncData({params}){
            const response = await axios.get(`/category?name=${params.id}`);
            const items = response.data;
            console.log(items);
            return {items};
        }
    }
</script>

<style scoped>

</style>
