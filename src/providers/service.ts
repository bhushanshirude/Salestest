import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {

    public user_api: string;

    constructor() {
        this.user_api = "http://192.168.0.12/streamtube-base/userApi/";
        // this.user_api = "http://buyersjunctions.com/healthcentor/";
    }
}
