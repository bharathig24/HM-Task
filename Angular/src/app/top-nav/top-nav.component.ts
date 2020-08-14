import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  user;
  constructor(private router : Router, private route : ActivatedRoute) {
    this.user = JSON.parse(localStorage.getItem("userData"))[1].userName;
    // console.log(this.user);
  }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
