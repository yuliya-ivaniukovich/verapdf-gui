import {handleResponse, defaultUrl} from './base';
import { isElectron } from '../enviroment';

export const FilesApi = {
    uploadFile(jobId, file) {
        if (isElectron) {
            const body = JSON.stringify({type: 'LOCAL',path: file.path});
            return fetch(`${defaultUrl}/api/jobs/${jobId}/files`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body
            }).then(handleResponse);
        } else {
            const body = new FormData();
            body.append('file', file);
            return fetch(`${defaultUrl}/api/jobs/${jobId}/files`, {
                method: 'POST', 
                body
            }).then(handleResponse);
        }
    }
}; 