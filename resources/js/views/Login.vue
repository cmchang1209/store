<template>
    <b-row class="login-page justify-content-center" align-v="center">
        <b-col cols="6">
            <b-card title="">
                <b-card-text>
                    <p class="title pb-2">
                        <span class="h1">請登入</span>
                        <span class="h3 mx-3">或</span>
                        <span>
                            <router-link to="register" class="f-register-link">
                                創建一個帳號
                            </router-link>
                        </span>
                    </p>
                    <b-form @submit="onSubmit">
                        <b-form-group id="input-group-1" label="密碼" label-for="input-1" description="">
                            <b-form-input id="input-1" v-model="form.email" type="email" placeholder="請輸入您的 E-mail" required></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-2" label="Email" label-for="input-2" description="">
                            <b-form-input id="input-2" v-model="form.password" type="password" placeholder="請輸入您的密碼" required></b-form-input>
                        </b-form-group>
                    </b-form>
                </b-card-text>
                <b-row class="justify-content-center" align-v="end">
                    <b-col cols="6">
                        <router-link to="register" class="f-forget-link">
                            創建一個帳號
                        </router-link>
                    </b-col>
                    <b-col cols="6">2</b-col>
                </b-row>
            </b-card>
        </b-col>
    </b-row>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
        }
    },
    created() {},
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        }
    }
}

</script>
