import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';
import { EnvService } from './env.service';

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY2ODE4MDY3OSwiZXhwIjoxNjY4MTg0Mjc5fQ.mJcaMDbGGkVdCtL3RVBdYFBQN6TUanUPLguEJIutWrEEolp14D2lrKFLTv8oKNOmvog-iswMhXfcd6D-3bhVyQ';

const headers = new HttpHeaders().set('Content-Type', 'application/json')
                                 .set('Accept', 'application/json')
                                 .set('Authorization', 'Bearer '+ token+ '');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private env: EnvService,
    private http: HttpClient
  ) { }


  getUserList(page: number, size: number, sort: any): Observable<any>{
    const paramUrl = '?page=' + page + '&size=' + size + '&sort='+sort;
    return this.http.get(this.env.apiUserList + paramUrl, { headers: headers })
    .pipe(
      tap(data => {
        console.log(data);
      })
    );
}

}
