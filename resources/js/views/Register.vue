<template>
    <b-row class="register-page justify-content-center" align-v="center">
        <b-col cols="10">
            <div class="w-100 px-5 py-3 warp">
                <h1 class="list-title pb-3 mb-4">創建一個帳號</h1>
                <b-form @submit="onSubmit" novalidate class="row px-0">
                    <div class="col-6">
                        <b-form-group id="input-group-email" label="Email" label-for="input-email" description="" :invalid-feedback="validate.email.message" :state="validate.email.status">
                            <b-form-input id="input-email" v-model="form.email" type="email" placeholder="請輸入您的 E-mail" :state="validate.email.status" tabindex="1" />
                        </b-form-group>
                        <b-form-group id="input-group-password" label="密碼" label-for="input-password" description="" :invalid-feedback="validate.password.message" :state="validate.password.status">
                            <b-form-input id="input-password" v-model="form.password" type="password" placeholder="請輸入您的密碼" :state="validate.password.status" tabindex="2" />
                        </b-form-group>
                        <b-form-group id="input-group-confirmPassword" label="確認密碼" label-for="input-confirmPassword" description="" :invalid-feedback="validate.confirmPassword.message" :state="validate.confirmPassword.status">
                            <b-form-input id="input-confirmPassword" v-model="form.confirmPassword" type="password" placeholder="請再次輸入您的密碼" :state="validate.confirmPassword.status" tabindex="3" />
                        </b-form-group>
                        <b-form-group id="input-group-nickName" label="暱稱" label-for="input-nickName" description="" :invalid-feedback="validate.nickName.message" :state="validate.nickName.status">
                            <b-form-input id="input-nickName" v-model="form.showNickName" type="text" placeholder="請輸入您暱稱" :state="validate.nickName.status" tabindex="4"></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-name" label="真實姓名" label-for="input-name" description="" :invalid-feedback="validate.name.message" :state="validate.name.status">
                            <b-form-input id="input-name" v-model="form.showName" type="text" placeholder="請輸入您的真實姓名" :state="validate.name.status" tabindex="5"></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-6">
                        <b-form-group id="input-group-birthday" label="生日" label-for="input-birthday" description="" :invalid-feedback="validate.birthday.message" :state="validate.birthday.status">
                            <b-form-input id="input-birthday" v-model="form.birthday" type="text" placeholder="請輸入您的生日(1995-01-01)" :state="validate.birthday.status" tabindex="5"></b-form-input>
                        </b-form-group>
                        <b-form-group id="radio-group-gender" label="性別" label-for="radio-gender">
                            <b-form-radio-group id="radio-gender" v-model="form.gender" :options="gender"></b-form-radio-group>
                        </b-form-group>
                        <b-form-group id="radio-group-continent" label="地區" label-for="select-continent">
                            <b-form-select id="select-continent" v-model="form.continent" :options="form.continent_options"></b-form-select>
                        </b-form-group>
                        <b-form-group id="radio-group-nation" label="地區" label-for="select-nation">
                            <b-form-select id="select-nation" v-model="form.nation" :options="form.nation_options"></b-form-select>
                        </b-form-group>
                        <div class="row f-submit-warp">
                            <div class="col-6">
                                <p>已有帳號?請
                                    <router-link to="login" class="f-login-link">
                                        登入
                                    </router-link>
                                </p>
                            </div>
                            <div class="col-6 text-right f-submit-buttom-warp">
                                <button type="button" class="fd-btn py-1 bg-blue" tabindex="3" @click="onSubmit" @enter="onSubmit">
                                    註冊
                                </button>
                            </div>
                        </div>
                    </div>
                </b-form>
            </div>
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
                password: '',
                confirmPassword: '',
                nickName: '',
                name: '',
                birthday: '',
                gender: 0, //0:Male,1:Female
                nation: null,
                continent: null,
                photoURL: '',
                photoTS: '',
                confirmCode: '',
                showName: '',
                showNickName: '',
                continent_options: [{ value: null, text: '請選擇您的地區' }],
                nation_options: [{ value: null, text: '請選擇您的國家' }]
            },
            validate: {
                email: { status: null, message: null },
                password: { status: null, message: null },
                confirmPassword: { status: null, message: null },
                nickName: { status: null, message: null },
                name: { status: null, message: null },
                birthday: { status: null, message: null }
            },
            gender: [
                { text: '男士', value: 0 },
                { text: '女士', value: 1 }
            ],
            referrerPath: 'home',
        }
    },
    created() {},
    computed: {},
    mounted() {},
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            this.validateEmail();
            this.validatePassword();
            this.validateConfirmPassword();
            this.validateNickName();
            this.validateBirthday();
        },
        validateEmail: function() {},
        validatePassword: function() {},
        validateConfirmPassword: function() {},
        validateNickName: function() {},
        validateBirthday: function() {},
        setCountry: function(value) {
            this.form.nation = value;
            this.countryShow = false;
        },
        closeCountry: function(value) {
            this.countryShow = value;
        },
        mkMd5Str: function() {},
        setPlayerBirthday: function(value) {
            if (this.form.birthday !== value) {
                this.form.birthday = value;
            }
        },
        setPlayerNation: function(value) {
            if (this.form.nation !== value) {
                this.form.nation = value;
            }
        },
    },
    watch: {
        'form.email': function(newVal, oldVal) {
            this.form.email = newVal.replace(/[\u4e00-\u9fa5]/g, '');
        }
    }
}

</script>
