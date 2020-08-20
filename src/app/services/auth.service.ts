import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhos:3000/users/register',body,{
      observe:'body'
    })
  }
}
