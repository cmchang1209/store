<template>
    <b-container>
        <b-row align-v="center" class="py-4">
            <b-col cols="4">
                <img src="images/fidodarts_logo.png">
            </b-col>
            <b-col v-for="(iteam, index) in linkList" :key="index" class="text-center">
                <router-link :to="iteam.link" class="f-footer-link">
                    {{ iteam.title }}
                </router-link>
            </b-col>
            <b-col cols="4" class="text-right">
                <div>
                    <b-form-select class="lang-select" size="sm" v-model="selected" :options="options"></b-form-select>
                </div>
                <div class="mt-3 right">© 2021 FidoDarts. All rights reserved</div>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
export default {
    components: {},
    props: [],
    data() {
        return {
            linkList: [{
                    title: '聯繫我們',
                    link: ''
                },
                {
                    title: '隱私政策',
                    link: ''
                },
                {
                    title: '官方網站',
                    link: ''
                }
            ],
            selected: 2,
            options: [
                { value: 1, text: 'English' },
                { value: 2, text: '中文(繁體)' },
                { value: 3, text: '中文(简体)' },
                { value: 4, text: '日本語' }
            ]
        }
    },
    created() {},
    mounted() {},
    methods: {},
    watch: {}
}

</script>
<style scoped lang="scss">
</style>
