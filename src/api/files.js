import {handleResponse, baseUrl} from './base';
import { isElectron } from '../enviroment';

export const FilesApi = {
    uploadFile(jobId, file) {
        const request = {
            method: 'POST'
        };
        if (isElectron) {
            request.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            request.body = JSON.stringify({type: 'LOCAL', path: file.path});
        } else {
            request.body = new FormData();
            request.body.append('file', file);
        }
        return fetch(`${baseUrl}/api/jobs/${jobId}/files`, request).then(handleResponse);
    }
}; 