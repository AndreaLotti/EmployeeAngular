import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './shared/employee';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataRestClientService {
    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders ({
            'Content-type': 'application/json'
        })
    }

    getDataRows(apiURL : string): Observable<Employee> {
        return this.http.get<Employee>(apiURL)
        .pipe();
    }

    postData(apiUrl : string, employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(apiUrl, JSON.stringify(employee), this.httpOptions)
        .pipe();
    }

    removeData(apiUrl : string) {
        return this.http.delete(apiUrl)
        .pipe();
    }

    updateData(apiUrl: string, employee: Employee){
        return this.http.put(apiUrl, JSON.stringify(employee), this.httpOptions)
        .pipe(); 
    }
}

