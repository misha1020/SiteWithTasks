import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../_services';
import { Problem } from '../_models';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[];
  constructor(private problemService: ProblemService) { 
    problemService.item.subscribe(data => {this.problems = data as Problem[] } );
  }

  ngOnInit() {
  }

}
