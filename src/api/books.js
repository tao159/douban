import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
export function getbooksList() {
    const url = 'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items';
    const data = Object.assign({}, commonParams, {
        os: 'ios',
        for_mobile: 1,
        start: 0,
        count: 10000,
        loc_id: 0,
        _: 0,
    })

    return jsonp(url, data, options)
}