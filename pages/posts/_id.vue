<template>
    <div>
        <h3 class="subheading">{{items[0].name}}</h3>
        <v-list two-line>
            <template v-for="item in items[0].posts">
                <v-subheader
                        :key="item.id * Math.random()"
                >
                    <nuxt-link
                            :to="'/article/' + item.title"
                    >{{item.title}}
                    </nuxt-link>
                </v-subheader>
                <v-divider></v-divider>
            </template>
        </v-list>
    </div>
</template>

<script>
    import axios from '~/plugins/axios';
    import { mapMutations } from 'vuex';

    export default {
        async asyncData({params}){
            const response = await axios.get(`/category?name=${params.id}`);
            const items = response.data;
            return {items};
        },
        methods: {
            ...mapMutations([
                'setCategory'
            ])
        },
        created() {
            this.setCategory(this.items[0].name)
        }
    }
</script>

<style scoped>

</style>
