import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080'

const API = {
    sendLoginRequest: (username, password) =>
        axios.post('/login', {username, password}),
    sendSignupRequest: (username, password) =>
        axios.post('/signup', {username, password}),
    sendEditUserRequest: (jwt, username, firstName, lastName) =>
        axios.put(`/user?username=${username}`,
            {firstName, lastName},
            {
                headers: {Authorization: `Bearer ${jwt}`}
            }
        ),
    sendDeleteUserRequest: (jwt, username) =>
        axios.delete(`/user?username=${username}`,
            {
                headers: {Authorization: `Bearer ${jwt}`}
            })
}

export default API;