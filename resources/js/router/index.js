import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home'

import Login from '../views/Login'
import Register from '../views/Register'
import Forget from '../views/Forget'

import Cart from '../views/Cart'
import More from '../views/MoreList'
import CheckOut from '../views/CheckOut'
import Done from '../views/Done'

import User from '../views/User'

//不允許導航到當前位置
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => err)
}


export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/forget',
        name: 'Forget',
        component: Forget
    }, {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }, {
        path: '/more',
        name: 'More',
        component: More
    }, {
        path: '/checkout',
        name: 'CheckOut',
        component: CheckOut
    },{
        path: '/done',
        name: 'Done',
        component: Done
    },{
        path: '/user',
        name: 'User',
        component: User
    },{
        path: "*",
        redirect: "/"
    }],
    /*
    切換路由scroll top 回頂部
     */
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
