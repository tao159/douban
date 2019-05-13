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