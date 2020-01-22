import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NessusService {

    constructor(private _httpClient: HttpClient) {
    }

    login() {
        return this._httpClient.post('/session', {
            username: 'seguridad',
            password: 'seguridad'
        }, {
            headers: new HttpHeaders({
                accept: 'application/json',
                'content-type': 'application/json'
            })
        });
    }

    getScans() {
        return this._httpClient.get('/scans', {
            headers: {
                accept: 'application/json',
                'x-apikeys': 'accessKey=5f0622c63cb9232bcf522d8ea473ef6a5d0fa8e198d056d97bc107ab88af9070;secretKey=bae7439414e9bd0bf7ecbc732d15fadf555fc78ed90c1f31da3d5348fcc88b3c'
            },
            params: {
                folder_id: '3',
                last_modification_date: ''
            }
        });

    }

    launchScan(id) {
        return this._httpClient.post(`/scans/${id}`, {}, {
            headers:{
                accept: 'application/json',
                'content-type': 'application/json',
                'x-apikeys': 'accessKey=5f0622c63cb9232bcf522d8ea473ef6a5d0fa8e198d056d97bc107ab88af9070;secretKey=bae7439414e9bd0bf7ecbc732d15fadf555fc78ed90c1f31da3d5348fcc88b3c'
            }
        });
    }

}
