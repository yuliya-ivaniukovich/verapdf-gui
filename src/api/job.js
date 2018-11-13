import {handleResponse, baseUrl} from './base';

export const JobApi = {
    createJob() {
        return fetch(`${baseUrl}/api/jobs`, { method: 'POST' }).then(handleResponse);
    }
};