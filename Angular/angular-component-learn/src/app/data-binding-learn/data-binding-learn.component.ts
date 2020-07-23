import { Component, OnInit } from '@angular/core';
import { ObjectDataBinding } from '../IObjectProperty';
@Component({
  selector: 'app-data-binding-learn',
  templateUrl: './data-binding-learn.component.html',
  styleUrls: ['./data-binding-learn.component.css']
})
export class DataBindingLearnComponent implements OnInit {
  element1 = "Haha"

  listObjectPropertyBinding = ObjectDataBinding;

  constructor() { }

  ngOnInit() {
  }

}
