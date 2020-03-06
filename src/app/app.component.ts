import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fdata;
  constructor(private s: DataService){}
  submitted;
  ngOnInit(){
this.getData()
  }
  
  getData(){
    this.s.ge().subscribe(res=>this.fdata=res)
  }
 
  up(x){
  this.submitted=true;
this.s.pu(x).subscribe(res=>this.getData());
}
 
}
