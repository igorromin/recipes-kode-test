import 'whatwg-fetch';
class RequestService {
    async getRequest(url){
        let data = await (await (window.fetch(url)
        .then(res => {
            return res.json()
        })        
        ))
        return data
    }
}

export default new RequestService()