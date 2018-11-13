import {handleResponse} from './base';

export const SettingsApi = {
    getProfiles() {
        return fetch('/api/vera/profiles').then(handleResponse);
    }
};