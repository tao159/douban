import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend/recommend'
import Movies from '@/views/movies/movies'
import test from '@/views/test.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Recommend
    }, {
        path: '/movies',
        component: Movies
    }]
})