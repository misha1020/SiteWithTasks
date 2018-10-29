import { Component, OnInit } from '@angular/core';
import { Problem } from '../problem';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
	problem: Problem = {
		name: "Задача 1",
		problemText: "текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст",
		solutionText: "решение решение решение решение решение решение решение решение решение решение решение решение решение решение решение решение решение решение решение решение "
	}

	constructor() { }

	ngOnInit() {
	}

}
