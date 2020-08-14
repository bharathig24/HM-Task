import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  [x: string]: any;
  animal: string;
  name: string;

  constructor() { }

  ngOnInit() {
  }

  openModal() {
  }

}
