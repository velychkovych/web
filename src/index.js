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

const requestURL = 'http://localhost:3000';

const loginAndSignupBody = {
    username: "velychkovych",
    password: "qwerty"
}

const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZlbHljaGtvdnljaCIsImlhdCI6MTY1NDExMjE4MH0.ZqWi2uxEcFrJdxZm8KILwfkVoJqfd0VYP6biZY2xtRc";

sendRequest('POST', `${requestURL}/signup`, null, loginAndSignupBody)
    .then(res => console.log(res))
    .catch(err => console.log(err))

sendRequest('POST', `${requestURL}/login`, null, loginAndSignupBody)
    .then(res => console.log(res))
    .catch(err => console.log(err));

sendRequest('GET', `${requestURL}/users`, jwt, null)
    .then(users => console.log(users))
    .catch(err => console.log(err))



