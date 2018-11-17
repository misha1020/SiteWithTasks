import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Problem } from '../_models';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {
  problemForm : FormGroup

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService) { }

  ngOnInit() {
    this.problemForm = this.formBuilder.group({
      name: ['', Validators.required],
      problemText: ['', Validators.required],
      solutionText: ['', Validators.required]
    });
  }

}
