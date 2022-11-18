
import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://birthday-6d6c3-default-rtdb.firebaseio.com',

})  

export default journalApi;
