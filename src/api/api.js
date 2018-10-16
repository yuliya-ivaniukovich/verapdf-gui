const DEFAULT_URL = 'http://localhost:8080/'

export const ajax = {
    get(url) {
        return fetch(`${DEFAULT_URL}${url}`).then(response => response.json())
    },
    post(url,options) {
        return fetch(`${DEFAULT_URL}${url}`, options)
            .then(response => response.json())
    } 
} 