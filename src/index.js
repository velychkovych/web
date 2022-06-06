function sendRequest(method, url, jwt = null, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';
        if (jwt) {
            xhr.setRequestHeader('Authorization', `Bearer ${jwt}`);
        }
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject(xhr.response);
        };

        xhr.send(JSON.stringify(body));
    });
}

const requestURL = 'http://localhost:8000/api/v1';

const loginAndSignupBody = {
    username: "velychkovych",
    password: "qwerty"
}


sendRequest('POST', `${requestURL}/signup`, null, loginAndSignupBody)
    .then(res => {
        console.log(res)
        return sendRequest('POST', `${requestURL}/login`, null, loginAndSignupBody)
    })
    .then(res => {
        console.log(res)
        return sendRequest('GET', `${requestURL}/users`, res.jwt, null)
    })
    .then(users => console.log(users))
    .catch(err => console.log(err));




