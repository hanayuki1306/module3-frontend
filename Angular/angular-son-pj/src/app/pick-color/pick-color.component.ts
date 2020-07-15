// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pick-color',
//   templateUrl: './pick-color.component.html',
//   styleUrls: ['./pick-color.component.css']
// })
// export class PickColorComponent implements OnInit {

//   // Green: String;
//   // Red: String;
//   // Blue: String;
//   // Black: String;
  
//   color : string;
  
//   changeColor(value){
//     console.log(value);
//     this.color = value;
//   }
//   2


//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.css']
})
export class ColorPickerComponent implements OnInit {

  background = '#00e067';
  constructor() { }

  ngOnInit() {
  }

  onChange(value) {
    this.background = value;
  }

}