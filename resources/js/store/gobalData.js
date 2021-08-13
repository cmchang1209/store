export default {
    state: {
        isGuest: true,
        me: {},
        appLoading: false,
        isShowLeftMenu: true
    },
    getters: {
        isTouchDevice(state) {
            return ('ontouchstart' in window || navigator.msMaxTouchPoints) || false
        },
        isIosDevice(state) {
            var u = navigator.userAgent
            return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        }
    },
    mutations: {
        setMe(state, val) {
            state.me = val
        },
        changeLoginStatus(state, val) {
            state.isGuest = val
        },
        changeAppLoadingStatus(state, val) {
            state.appLoading = val
        },
        changePageStatus(state, val) {
            state.isShowLeftMenu = val
        }
    },
    actions: {
        setMe: ({ commit }, val) => {
            commit('setMe', val)
        },
        changeTitle: ({ commit }, val) => {
            document.title = `${val}::`;
        },
        changeLoginStatus: ({ commit }, val) => {
            commit('changeLoginStatus', val)
        },
        changeAppLoadingStatus: ({ commit }, val) => {
            commit('changeAppLoadingStatus', val)
        },
        changePageStatus: ({ commit }, val) => {
            commit('changePageStatus', val)
        }
    }
}
