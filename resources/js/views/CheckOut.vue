<template>
    <div class="checkout-page">
        <b-row>
            <b-col cols="12" class="py-5 cart-title-warp">
                <h4 class="d-inline-block cart-title">結帳</h4>
            </b-col>
        </b-row>
        <b-row class="cart-list-warp">
            <b-col cols="12" class="my-3 cart-iteam-warp">
                <b-row class="cart-iteam justify-content-center py-3" align-v="center">
                    <b-col cols="1" class="text-center">
                    </b-col>
                    <b-col cols="2" class="text-center">
                        <img src="images/prod1.png" class="d-inline-block align-top prod-img">
                    </b-col>
                    <b-col cols="6">節日期間特別限定 - FIDODARTS 經典主題系列 - 沈穩藍</b-col>
                    <b-col cols="2" class="price text-right h4">NTD 30</b-col>
                    <b-col cols="1" class="del text-right h2 cursor-pointer">
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-5 justify-content-center total-warp" align-v="stretch">
            <b-col cols="2" class="text-left">
                購買人資訊
            </b-col>
            <b-col cols="6" class="text-left">
                <p>E-mail : liu@gmail.com</p>
                <p>購買人暱稱 : Ninomae Inanis</p>
                <p>FIDO ID : 1234548</p>
            </b-col>
            <b-col cols="4">
                <b-row class="ustify-content-end total-warp" align-v="center">
                    <b-col cols="12" class="text-right">
                        <span class="h5 title">總金額</span>
                        <span class="h5 title mx-1">:</span>
                        <span class="price h2">NTD 30</span>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="mt-5 justify-content-end pay-warp" align-v="center">
            <b-col cols="2" class="text-left">
                選擇支付方式
            </b-col>
            <b-col cols="6" class="text-left">
                <button class="fd-btn pay-type-btn">LINE PAY</button>
                <button class="fd-btn pay-type-btn">Master Card</button>
            </b-col>
            <b-col cols="4" class="text-right">
                <a href="/done" class="fd-btn py-1 bg-blue text-center d-inline-block">前往購買</a>
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
    methods: {}
}

</script>
