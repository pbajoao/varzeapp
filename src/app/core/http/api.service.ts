import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginContext, User} from '@app/models/user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    login(loginContext: LoginContext): Observable<HttpResponse<User>> {
        return this.http.post<User>(`http://localhost:8100/api/login`, loginContext, { observe: 'response' });
    }
}
