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
  searchResult: Problem[];
  value = '';
  constructor(private problemService: ProblemService) { 
    problemService.item.subscribe(data => {this.problems = data as Problem[]; this.searchResult = data as Problem[] } );
  }

  ngOnInit() {
  }

  
  onKey(event: any) {
    this.value = event.target.value;
    this.searchResult = [];
    if(this.value.length == 0)
      this.searchResult = this.problems;
    else
      this.problems.forEach(data => {
        if(data.name.toUpperCase().indexOf(this.value.toUpperCase()) > -1 || data.problemText.toUpperCase().indexOf(this.value.toUpperCase()) > -1)
          this.searchResult.push(data);
      })
  }

}