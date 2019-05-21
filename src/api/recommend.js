import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
export function getRecommend(page) {
    const url = 'https://m.douban.com/rexxar/api/v2/elendil/recommend_feed';
    const data = Object.assign({}, commonParams, {
        start: page,
        count: 20,
        gender: '',
        birthday: '',
        udid: '9fcefbf2acf1dfc991054ac40ca5114be7cd092f',
        for_mobile: 1
    })

    return jsonp(url, data, options)
}


//detail
export function getRecommendDetail(id) {
    const url = `https://m.douban.com/rexxar/api/v2/note/${id}`

    return jsonp(url, null, null)
}