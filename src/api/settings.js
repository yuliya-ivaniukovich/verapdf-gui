import {handleResponse, baseUrl} from './base';

export const SettingsApi = {
    getProfiles() {
        return fetch(`${baseUrl}/api/vera/profiles`).then(handleResponse);
    }
};