import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'TodoSocial';
  first_name;
  last_name;
  email_id;
  password;
  confirm_password;

  // tslint:disable-next-line: member-ordering
  tags = [
    {id: 1, name : 'Cooking'},
    {id: 2, name : 'Sports'},
    {id: 3, name : 'Reading'},
    {id: 4, name : 'Exercise'}
  ];

  tempArr: any = { 'brands': [] };

  ngOnInit(): void {
  }

  onChangeCategory(event, cat: any){ 
    this.tempArr.brands.push(cat.name);
  }

  submit(f) {
    console.log(f);
  }
}
