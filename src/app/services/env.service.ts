import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {


  apiUserList = 'https://sigrsu.adden.net/v1/rest/auth';

  constructor() { }
}
