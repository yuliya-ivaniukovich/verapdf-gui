import {handleResponse, defaultUrl} from './base';

export const SettingsApi = {
    getProfiles() {
        return fetch(`${defaultUrl}/api/vera/profiles`).then(handleResponse);
    }
};