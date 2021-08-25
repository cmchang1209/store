<template>
    <div class="more-list-page">
        <f-carousel />
        <b-row align-v="baseline" class="mb-3">
            <b-col cols="8">
                <h5>一般主題</h5>
            </b-col>
            <b-col cols="4" class="text-right text-color-3">
                第1頁
            </b-col>
        </b-row>
        <b-card-group columns>
            <b-card v-for="i in 12" :key="i" title="" img-src="./images/prod1.png" img-alt="Image" img-top tag="article">
                <b-card-text>
                    <div class="text">節日期間特別限定 - FIDODARTS 經 典主題系列 - 沈穩藍</div>
                    <div class="price mt-3">NTD 30</div>
                </b-card-text>
            </b-card>
        </b-card-group>
        <div class="mb-5">
            <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
        </div>
    </div>
</template>
<script>
import Carousel from '../components/layout/Carousel';
export default {
    components: {
        'f-carousel': Carousel
    },
    props: [],
    data() {
        return {
            rows: 100,
            currentPage: 1
        }
    },
    created() {},
    computed: {},
    methods: {}
}

</script>
