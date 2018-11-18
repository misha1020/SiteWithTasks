import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Problem, Coment, fsComent } from '../_models';
import { ProblemService } from '../_services';
import { AuthenticationService } from "../_services";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() id: string;
  values = '';
  problem: Problem; 
  coments: Coment[];
  constructor(private route: ActivatedRoute, private problemService: ProblemService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    this.problemService.getInfo(this.id).subscribe(data => this.problem = data as Problem);
    
    this.coments = this.problemService.getComents(this.id);
  }

  sendComent(){
    this.problemService.postComent(this.auth.getUser().uid, this.problem.id,this.values);
    this.coments = this.problemService.getComents(this.id);
  }

  onKey(event: any) {
    this.values = event.target.value;
  }
}
