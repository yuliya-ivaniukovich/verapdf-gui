import {handleResponse} from './base';

export const JobApi = {
    createJob() {
        return fetch(`/api/jobs`, { method: 'POST' }).then(handleResponse);
    }
};