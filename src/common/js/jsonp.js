import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
    url += url.indexOf('?') < 0 ? '?' + param(data) : '&' + param(data)
        // if (url.indexOf('?') < 0) {
        //     url += '?' + param(data)
        // } else {
        //     url += '&' + param(data)
        // }
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = '';
    for (var k in data) {
        if (data[k] != undefined) {
            var value = data[k]
        } else {
            var value = ''
        }

        url += `&${k}=${encodeURIComponent(value)}`
    }

    if (url) {
        return url.substring(1);
    } else {
        return ''
    }
}