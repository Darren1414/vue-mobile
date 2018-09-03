//api访问基类
import request from '../common/request.js'

export default class ApiBase {

    constructor() {
        this.baseUrl = 'http://ip:port'
    }

    async request(url, data) {
        let params = {
            url: this.baseUrl + url,
            method: 'post',
            data: data,
            contentType: 'application/json;charset=utf-8',
        }

        let result
        let response = await request(params)
        result = response.data

        return result
    }

}
