<template>
    <b-navbar type="dark" class="px-0">
        <b-navbar-brand href="/">
            <img src="images/logo.png" class="d-inline-block align-top logo-img" alt="FidoStore">
            <span class="logo-text">FIDO STORE</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <!-- Right aligned nav items -->
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-form class="f-nav-search-form">
                    <b-form-input class="mr-sm-2 f-nav-search" placeholder="Search"></b-form-input>
                </b-nav-form>
                <div right>
                    <a href="/cart" class="f-nav-link" id="f-tooltip-cart">
                        <div class="d-inline-block f-nav-cart-div">
                            <img src="images/cart.png" class="d-inline-block align-top cart-img" alt="FidoCart">
                            <span class="num-badge">1</span>
                        </div>
                        <span class="title">購物車</span>
                    </a>
                    <span class="separate">|</span>
                    <a href="/login" class="f-nav-link login">
                        <div class="d-inline-block f-nav-login-div">
                            <img src="images/login.png" class="d-inline-block align-top login-img" alt="FidoCart">
                            <span class="title">登入</span>
                        </div>
                    </a>
                </div>
            </b-navbar-nav>
        </b-collapse>
        <b-tooltip target="f-tooltip-cart" triggers="hover" custom-class="f-cart-tooltip" placement="bottom">
            <h6 class="lead small mb-2 pb-2 px-3">最近加入的商品</h6>
            <img src="images/prod1.png" class="d-inline-block align-top">
            <span class="contant">節日期間特別限定 - FIDODARTS 經典主題系列 - 沈穩藍</span>
            <span class="price text-right">NTD 30</span>
            <p class="px-3 mb-0 text-right mt-2">
                <a href="/cart" class="f-cart-link fd-btn py-1 border-blue border">
                    查看我的購物車
                </a>
            </p>
        </b-tooltip>
    </b-navbar>
</template>
<script>
export default {
    components: {},
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
