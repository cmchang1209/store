<template>
    <div class="ct-home-iteam-list">
        <b-row align-v="baseline">
            <b-col cols="8">
                <h5>{{ data.title }}</h5>
            </b-col>
            <b-col cols="4" class="f-more-warp">
                <router-link :to="data.link" class="f-more-link">
                    查看更多 <b-icon-chevron-right></b-icon-chevron-right>
                </router-link>
            </b-col>
        </b-row>
        <div v-dragscroll.x="!isTouchDevice" class="no-scroll-bar table-responsive">
            <table role="table" class="table b-table table-borderless">
                <tbody>
                    <tr>
                        <td v-for="(iteam, index) in data.data" :key="index">
                            <b-card title="" :img-src="iteam.imgSrc" img-alt="Image" img-top tag="article">
                                <b-card-text>
                                	<div class="text">{{ iteam.text }}</div>
                                	<div class="price mt-3">{{ iteam.price }}</div>
                                </b-card-text>
                            </b-card>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { dragscroll } from 'vue-dragscroll'
import { mapGetters } from 'vuex'
export default {
    directives: {
        dragscroll
    },
    components: {},
    props: ['data'],
    data() {
        return {}
    },
    created() {},
    computed: {
        ...mapGetters(['isTouchDevice'])
    },
    methods: {}
}

</script>
