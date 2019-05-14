import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
export function getGroupList() {
    const url = 'https://m.douban.com/rexxar/api/v2/group/rec_groups_for_newbies';
    const data = Object.assign({}, commonParams, {
        os: 'ios',
        for_mobile: 1,
        ck: ''
    })

    return jsonp(url, data, options)
}