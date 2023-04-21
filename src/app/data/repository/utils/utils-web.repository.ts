import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ResponseData } from 'src/app/core/models/common/response/response-data.response';
import { ParameterResponse } from 'src/app/core/models/utils/response/parameter.response';
import { UtilsRepository } from 'src/app/core/repository/utils/utils.repository';

@Injectable({
    providedIn: 'root'
})

export class UtilsWebRepository extends UtilsRepository {

    constructor(
        private http: HttpClient
    ) {
        super();
    }

    getParameterById(id: string): Promise<ResponseData<ParameterResponse[]>> {

        const data = [{ id: 1, name: 'OUTBOUND' }, { id: 2, name: 'INBOUND' }];

        return new Promise((resolve, reject)=> {
            try {
                resolve({ error: null, data, message: ''})
            } catch (error) {
                reject(error)
            }
        })
    }

}
