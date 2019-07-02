import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  arg:any;
  constructor() { }

  ngOnInit() {
    this.arg='coursemanagement';
  }
  course(a:String){
    this.arg=a;
  }

}
