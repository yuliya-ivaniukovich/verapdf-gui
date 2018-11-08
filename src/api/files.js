import {handleResponse, defaultUrl} from './base';

export const FilesApi = {
    uploadFile(jobId, file) {
        const body = new FormData();
        body.append('file', file);
        return fetch(`${defaultUrl}/api/jobs/${jobId}/files`, { method: 'POST', body }).then(handleResponse);
    },
    uploadLocalFile(jobId, filePath) {
        const body = JSON.stringify({type: 'LOCAL', path: filePath});
        return fetch(`${defaultUrl}/api/jobs/${jobId}/files`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, method: 'POST', body }).then(handleResponse);
    }
}; 