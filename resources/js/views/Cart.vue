<template>
    <div class="cart-page">
        <b-row>
            <b-col cols="12" class="py-5 cart-title-warp">
                <img src="images/cart.png" class="d-inline-block align-top cart-img" alt="FidoStore">
                <h4 class="d-inline-block cart-title">購物車</h4>
            </b-col>
        </b-row>
        <b-row class="cart-list-warp">
            <b-col cols="12" class="my-3 cart-iteam-warp">
                <b-row class="cart-iteam justify-content-center py-3" align-v="center">
                    <b-col cols="1" class="text-center">
                        <b-form-checkbox></b-form-checkbox>
                    </b-col>
                    <b-col cols="2" class="text-center">
                        <img src="images/prod1.png" class="d-inline-block align-top prod-img">
                    </b-col>
                    <b-col cols="6">節日期間特別限定 - FIDODARTS 經典主題系列 - 沈穩藍</b-col>
                    <b-col cols="2" class="price text-right h4">NTD 30</b-col>
                    <b-col cols="1" class="del text-right h2 cursor-pointer">
                        <b-icon-x></b-icon-x>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="justify-content-center py-3" align-v="center">
            <b-col cols="12" class="my-3 text-left all-select-warp">
                <b-form-checkbox>全部選擇</b-form-checkbox>
            </b-col>
        </b-row>
        <b-row class="mt-5 justify-content-end total-warp">
            <b-col cols="12" class="text-right">
                <span class="h5 title">總金額</span>
                <span class="h5 title mx-1">:</span>
                <span class="price h2">NTD 30</span>
                <a href="/checkout" class="fd-btn py-1 bg-blue ml-3 text-center">前往購買</a>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    components: {},
    props: [],
    data() {
        return {}
    },
    created() {},
    computed: {},
    mounted() {},
    methods: {}
}

</script>
