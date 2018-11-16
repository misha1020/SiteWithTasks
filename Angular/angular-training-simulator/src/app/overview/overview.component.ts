import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Problem } from '../_models';
import { ProblemService } from '../_services';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() id: string;
  problem: Problem; 
  constructor(private route: ActivatedRoute, private problemService: ProblemService) { }

  ngOnInit() {
    this.route.params.subscribe(params => 
        this.id = params.id);
    this.problemService.getInfo(this.id).subscribe(data => {this.problem = data as Problem});
  }
}
