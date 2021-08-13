<template>
    <div>
        <!-- nav -->
        <b-container fluid class="ct-nav">
            <b-container>
                <f-nav />
            </b-container>
        </b-container>
        <!-- main area -->
        <b-container>
            <b-row v-if="isShowLeftMenu">
                <b-col>
                    <f-pc-left />
                </b-col>
                <b-col cols="9" class="pl-0">
                    <router-view></router-view>
                </b-col>
            </b-row>
            <router-view v-else></router-view>
        </b-container>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Nav from '../components/layout/Nav';
import PcLeft from '../components/layout/PcLeft';
export default {
    components: {
        'f-nav': Nav,
        'f-pc-left': PcLeft
    },
    props: [],
    data() {
        return {}
    },
    created() {
        var path = this.$route.path
        var paths = path.split('/')
        if (paths[1] === 'login') {
            this.changePageStatus(false)
        }
    },
    computed: mapState({
        isShowLeftMenu: state => state.gobalData.isShowLeftMenu,
    }),
    mounted() {

    },
    methods: {
        ...mapActions(['changePageStatus'])
    },
    watch: {}
}

</script>
<style scoped lang="scss">
</style>
