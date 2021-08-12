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
            <b-row>
                <b-col><f-pc-left /></b-col>
                <b-col cols="10" class="p-0">
                    <router-view></router-view>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
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
    created() {},
    mounted() {},
    methods: {},
    watch: {}
}

</script>
<style scoped lang="scss">
</style>
