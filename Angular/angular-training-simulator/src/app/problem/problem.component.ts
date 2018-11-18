import { Component, OnInit, Input } from '@angular/core';
import { Problem } from '../_models';
import { ProblemService } from '../_services';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
	private urls : string[];
	private _problem : Problem;
	@Input() set problem(problem: Problem){
		if(problem != undefined){
			this._problem = problem;
			if(this._problem.imageURI != undefined)
				this.urls = this.problemService.getImagesURLs(this._problem.imageURI);
		}
	}
  private	display: boolean;

	constructor(private problemService: ProblemService) {	this.urls = [];	}

	ngOnInit() {
		this.display = false;
	}

	openModal() {
		this.display = !this.display;
  }
}
