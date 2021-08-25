<template>
    <b-row class="forget-page justify-content-center" align-v="center">
        <b-col cols="6">
            <div class="w-100 mb-5">
                <h3 class="list-title mb-3">忘記密碼? 通過三個簡單步驟更改密碼。</h3>
                <ol class="lead small">
                    <li class="mb-3">在下面填寫您的墊子郵件地址</li>
                    <li class="mb-3">我們會通過電子郵件向您發送一個臨時代碼</li>
                    <li class="mb-3">使用代碼更改我們網站上的密碼</li>
                </ol>
            </div>
            <b-form @submit="onSubmit" novalidate>
                <b-form-group id="input-group-email" label="Email" label-for="input-email" description="" :invalid-feedback="validate.email.message" :state="validate.email.status">
                    <b-input-group>
                        <b-form-input id="input-email" v-model="form.email" type="email" placeholder="請輸入已註冊帳號之信箱" :state="validate.email.status" tabindex="1"></b-form-input>
                    </b-input-group>
                </b-form-group>
                <b-form-checkbox v-model="form.sendAdmin" class="mb-3 small form-text text-muted send-admin">
                    如果您一直無法接收相關信件，請在填寫完email後勾選此處
                </b-form-checkbox>
                <div class="text-right">
                    <button type="submit" class="fd-btn py-1 bg-blue" tabindex="2">發送</button>
                </div>
            </b-form>
        </b-col>
    </b-row>
</template>
<script>
export default {
    components: {},
    props: [],
    data() {
        return {
            form: {
                email: '',
                sendAdmin: false
            },
            validate: {
                email: { status: null, message: null }
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        next()
    },
    created() {},
    computed: {},
    mounted() {},
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            this.validateEmail()
        },
        validateEmail: function() {}
    }
}

</script>
