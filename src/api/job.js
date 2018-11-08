import {handleResponse, defaultUrl} from './base';

export const JobApi = {
    createJob() {
        return fetch(`${defaultUrl}/api/jobs`, { method: 'POST' }).then(handleResponse);
    }
};