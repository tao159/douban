import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend/recommend'
import Movies from '@/views/movies/movies'
import Groups from '@/views/groups/groups'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Recommend
    }, {
        path: '/movies',
        component: Movies
    }, {
        path: '/groups',
        component: Groups
    }]
})