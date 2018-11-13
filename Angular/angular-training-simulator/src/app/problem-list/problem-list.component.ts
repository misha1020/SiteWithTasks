import { Component, OnInit } from '@angular/core';
import { prList } from './problems';
import { ProblemComponent } from '../problem';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems = prList;
  constructor() { }

  ngOnInit() {
  }

}
