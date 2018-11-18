import { Component, OnInit, Input } from '@angular/core';
import { Problem } from '../_models';
import { ProblemService } from '../_services';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
	private problemImgUrls : string[];
	private solutionImgUrls : string[];
	private _problem : Problem;
	@Input() set problem(problem: Problem){
		if(problem != undefined){
			this._problem = problem;
			if(this._problem.problemImages != undefined)
				this.problemImgUrls = this.problemService.getImagesURLs(this._problem.problemImages);
			if(this._problem.solutionImages != undefined)
				this.solutionImgUrls = this.problemService.getImagesURLs(this._problem.solutionImages);
		}
	}
  private	display: boolean;

	constructor(private problemService: ProblemService) {	this.problemImgUrls = [];	this.solutionImgUrls = [];}

	ngOnInit() {
		this.display = false;
	}

	openModal() {
		this.display = !this.display;
  }
}
