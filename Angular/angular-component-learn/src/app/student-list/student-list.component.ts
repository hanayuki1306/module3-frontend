import { Component, OnInit } from '@angular/core';
import { ListStudents } from '../IStudentDao';
import { IStudent } from '../IStudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentlist = ListStudents;
  studentDetail: IStudent;
 

  constructor() { }

  ngOnInit() {
  }
  changeStudent(student: IStudent) {
    this.studentDetail = student;
  }
  getMark(value: any) {
    this.studentDetail.mark = value;
  }
}
