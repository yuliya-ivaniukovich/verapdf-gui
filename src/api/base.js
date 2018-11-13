import {isElectron} from '../enviroment';

export const baseUrl = isElectron ? 'http://localhost:8080' : '';

export const handleResponse = response => {
    if (!response.ok) {
        return response.json().then(error => {
            alert(error.message);
            throw new Error(error.message);
        });
    }
    return response.json();
};