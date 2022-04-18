import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='https://reqres.in/api/unknown';

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(this.baseUrl);
  }
  getUserListById(id:number){
    return this.http.get(this.baseUrl+'/'+id)
  }
}
