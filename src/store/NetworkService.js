import RequestService from './RequestService';

const BASE_URL = "https://test.kode-t.ru";

class NetworkService {
  getRecipes(){
    let url = `${BASE_URL}/list.json`;
    return RequestService.getRequest(url);
  }

  getRecipe(id){
    let url = `${BASE_URL}/detail_${id}.json`;
    return RequestService.getRequest(url);
  }
}

export default new NetworkService();