import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fdcfd19ddf594ce287f66606fd5819ba',
    },
});
