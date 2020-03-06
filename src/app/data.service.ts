import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private h: HttpClient) { }
  ge(){
    return this.h.get('http://localhost:3000/posts')
  }
  pu(a){
    return this.h.put('http://localhost:3000/posts/'+a.id,a)
  }
}
