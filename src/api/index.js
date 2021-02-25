import request from '@/utils/request'

export function fetchList(params) {
    return request({
        url: '/api/v1/articles',///api/v1/articles
        method: 'get',
        params: params
    })
}

export function fetchFocus(params) {
    return request({
        url: '/api/v1/focus',
        method: 'get',
        params: params
    })
}

export function fetchCategory(params) {
    return request({
        url: '/api/v1/categorys',
        method: 'get',
        params: params
    })
}

export function fetchFriend(params) {
    return request({
        url: '/friend',
        method: 'get',
        params: params
    })
}

export function fetchSocial(params) {
    return request({
        url: '/api/v1/social',
        method: 'get',
        params: params
    });
}

export function fetchSiteInfo() {
    return request({
        url: '/api/v1/site',
        method: 'get',
        params: {}
    })
}

export function fetchComment() {
    return request({
        url: '/comment',
        method: 'get',
        params: {}
    })
}
