import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
export function getMoviesList(page) {
    const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items';
    const data = Object.assign({}, commonParams, {
        os: 'ios',
        for_mobile: 1,
        start: 0,
        count: 18,
        loc_id: 108288,
        _: 1557476315534
    })

    return jsonp(url, data, options)
}


export function getItemDetail(id) {
    const url = `https://m.douban.com/rexxar/api/v2/elessar/subject/${id}`;
    return jsonp(url, null, null)
}
//https://m.douban.com/rexxar/api/v2/elessar/subject/27074316  最前面的数据
//https://m.douban.com/rexxar/api/v2/movie/27074316/interests  短评
//https://m.douban.com/rexxar/api/v2/movie/27074316/credits  影人
// https://m.douban.com/rexxar/api/v2/movie/27074316/forum_topics?start=0&count=5&ck=&for_mobile=1  讨论