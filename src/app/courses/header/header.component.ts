import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() select: string;
  arg:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.arg='coursemanagement';
   
  }
  course(a:String){
    this.arg=a;
  }

  onNavigate(route:String){
    this.router.navigate(new Array(route));
  }
}
