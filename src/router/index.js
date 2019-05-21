import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/views/recommend/recommend'
import Movies from '@/views/movies/movies'
import Groups from '@/views/groups/groups'
import Books from '@/views/books/books'
import RecommendDetail from '@/views/note/note'
import movieDetail from '@/views/movieDetail/movieDetail'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/recommend',

    }, {
        path: '/recommend',
        component: Recommend,
        children: [{
            path: ':id',
            name: 'note',
            component: RecommendDetail
        }]
    }, {
        path: '/movies',
        component: Movies,
        children: [{
            path: ':id',
            component: movieDetail
        }]
    }, {
        path: '/groups',
        component: Groups
    }, {
        path: '/books',
        component: Books
    }]
})