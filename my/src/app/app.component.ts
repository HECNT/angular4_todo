import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // obj = {
  //   id : 1,
  //   name : 'Jose',
  //   age : 21
  // }
  //
  // arr = [
  //   {id:1,name:'Jose'},
  //   {id:2,name:'Carlos'},
  //   {id:3,name:'Martin'},
  //   {id:4,name:'Jesus'},
  //   {id:5,name:'Armando'}
  // ]
  //
  // condicion = true

  items = [
    {name:'Angular 4'},
    {name:'ReactJS'},
    {name:'VueJS'},
    {name:'JQuery'},
  ]

  newItem = ""

  pushItem = function () {
    if (this.newItem != '') {
      this.items.push({name:this.newItem});
      this.newItem = ''
    }
  }

  removeItem = function (index) {
    this.items.splice(index, 1)
  }
}
