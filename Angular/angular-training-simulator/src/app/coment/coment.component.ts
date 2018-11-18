import { Component, OnInit, Input } from '@angular/core';
import { Coment } from '../_models';
import { AuthenticationService, ProblemService } from '../_services';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
  @Input() coment: Coment;
  constructor(private authenticationService: AuthenticationService, private problemService:ProblemService) { }

  ngOnInit() {
  }

  delete(){
    if(this.authenticationService.getUser() != null && this.authenticationService.getUser().uid == this.coment.user.id){
      this.problemService.deleteComent(this.coment.id);
    }
  }

}
