<template>
    <div class="ct-pc-main">
        <f-carousel />
        <f-iteam-list v-for="(iteam, index) in list" :data="iteam" :key="index" />
    </div>
</template>
<script>
import Carousel from '../components/layout/Carousel';
import IteamList from '../components/layout/IteamList';
export default {
    components: {
        'f-carousel': Carousel,
        'f-iteam-list': IteamList,
    },
    data() {
        return {
            list: [{
                    title: '主題',
                    link: '',
                    data: [{
                            imgSrc: './images/prod1.png',
                            text: '節日期間特別限定 - FIDODARTS 經 典主題系列 - 沈穩藍',
                            price: 'NTD 30'
                        },
                        {
                            imgSrc: './images/prod1.png',
                            text: '節日期間特別限定 - FIDODARTS 經 典主題系列 - 活力橘',
                            price: 'NTD 30'
                        },
                        {
                            imgSrc: './images/prod1.png',
                            text: '節日期間特別限定 - FIDODARTS 經 典主題系列 - 魅力紫',
                            price: 'NTD 30'
                        }
                    ]
                },
                {
                    title: '動畫',
                    link: '',
                    data: [{
                            imgSrc: './images/prod2.png',
                            text: 'FIDODARTS 獲獎動畫-四季季節',
                            price: 'NTD 75'
                        },
                        {
                            imgSrc: './images/prod2.png',
                            text: '節日期間特別限定 - FIDODARTS 經 典主題系列 - 活力橘',
                            price: 'NTD 30'
                        },
                        {
                            imgSrc: './images/prod2.png',
                            text: '節日期間特別限定 - FIDODARTS 經 典主題系列 - 活力橘',
                            price: 'NTD 30'
                        }
                    ]
                },
                {
                    title: '音效',
                    link: '',
                    data: [{
                            imgSrc: './images/prod3.png',
                            text: 'FIDODARTS 聖誕節日特別音效包',
                            price: 'NTD 60'
                        },
                        {
                            imgSrc: './images/prod3.png',
                            text: '節日期間特別限定 - FIDODARTS 經 典主題系列 - 活力橘',
                            price: 'NTD 30'
                        },
                        {
                            imgSrc: './images/prod3.png',
                            text: '節日期間特別限定 - FIDODARTS 經 典主題系列 - 活力橘',
                            price: 'NTD 30'
                        }
                    ]
                }
            ]
        }
    },
    created() {},
    methods: {}
}

</script>
