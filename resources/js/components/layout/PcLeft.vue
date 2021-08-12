<template>
    <div class="ct-pc-left">
        <b-list-group class="menu accordion pb-4" role="tablist">
            <b-list-group-item class="title">購買</b-list-group-item>
            <b-list-group-item v-for="(item, i) in menu" :key="i" role="tab">
                <b-button block v-b-toggle="'accordion-'+i" variant="link">{{ item.title }}</b-button>
                <b-collapse :id="'accordion-'+i" accordion="menu-accordion" :visible="i===0" role="tabpanel">
                    <b-list-group class="sub">
                        <b-list-group-item v-for="(sub, j) in item.sub" :key="i+'-'+j">
                            <router-link :to="sub.link" class="f-sub-menu-link">
                                {{ sub.title }}
                            </router-link>
                        </b-list-group-item>
                    </b-list-group>
                </b-collapse>
            </b-list-group-item>
        </b-list-group>
        <b-list-group class="news pb-4 pt-4">
            <b-list-group-item class="title">最新資訊</b-list-group-item>
            <b-list-group-item>
                <router-link to="home" class="f-news-link">
                    7/12、7/26 08:00-09:30 MyCard相關支 付方式維護通知
                </router-link>
            </b-list-group-item>
            <b-list-group-item>
                <router-link to="home" class="f-news-link">
                    關貿網路電子發票平台 06/22 21:00 - 22:00暫停服務公告
                </router-link>
            </b-list-group-item>
        </b-list-group>
        <b-list-group class="q-and-a pb-4 pt-4">
            <b-list-group-item class="title">常見問題</b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
export default {
    components: {},
    props: [],
    data() {
        return {
            menu: [{
                    title: '主題',
                    sub: [
                        { title: '一般主題', link: '' },
                        { title: '動態主題', link: '' },
                        { title: '限定主題', link: '' }
                    ]
                },
                {
                    title: '動畫',
                    sub: [
                        { title: '一般動畫', link: '' },
                        { title: '限定動畫', link: '' }
                    ]
                },
                {
                    title: '音效',
                    sub: [
                        { title: '一般音效', link: '' },
                        { title: '限定音效', link: '' }
                    ]
                }
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
