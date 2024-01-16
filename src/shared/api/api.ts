import axios from 'axios';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

const baseURL = IS_DEV ? 'http://localhost:8000' : 'http://production.ru'

// отдельный инстанс для удобства и чтобы не импортить в каждом thunk
export default axios.create({
    baseURL,
    headers: {
        authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY) || ''
    }
});
