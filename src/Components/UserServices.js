import axios from "axios";
const URL = "https://api.mevzu.app/api/bundle/temp/?format=json"
class UserServices{
    getUsers = async () => {
        const response = await axios.get(URL);
        return response.data;
    }
}

export default new UserServices();