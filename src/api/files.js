import {handleResponse} from './base';

export const FilesApi = {
    uploadFile(jobId, file) {
        const body = new FormData();
        body.append('file', file);
        return fetch(`/api/jobs/${jobId}/files`, { method: 'POST', body }).then(handleResponse);
    }
};