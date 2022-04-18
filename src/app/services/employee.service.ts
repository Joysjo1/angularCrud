import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl='http://localhost:3000/posts';

  constructor(private htttp:HttpClient) { }
  getEmployeeList(){
     return this.htttp.get(this.baseUrl)
  }

}
