import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-95fc1.firebaseio.com'
});

export default instance
