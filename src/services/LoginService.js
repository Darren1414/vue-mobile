import ApiBase from './ApiBase'

export default class LoginService extends ApiBase {

    //登陆
    async login(username, password) {
       
        const url = '/login'
        let data = {username, password} // 初始化请求参数
        const result = await super.request(url, data)

        return result
    }

}
