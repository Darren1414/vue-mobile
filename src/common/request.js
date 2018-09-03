//网络请求通用模块
import axios from 'axios'

export default async function ({
    url = null,
    method = 'get',
    data = {},
    contentType = 'application/x-www-form-urlencoded',
    } = {})
{

    let response
    
    await axios({
        url: url,
        method: method,
        data: data,
        headers: { 'Content-Type': contentType },
    }).then((res) => {
        response = res
    })

    return response
}