import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, ProblemService } from '../_services';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Problem } from '../_models';

@Component({
  selector: 'app-add-problem',
  templateUrl: './add-problem.component.html',
  styleUrls: ['./add-problem.component.css']
})
export class AddProblemComponent implements OnInit {
  problemForm : FormGroup;
  loading = false;
  images: File[];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthenticationService,
              private problemService:ProblemService) { }

  ngOnInit() {
    this.images = [];
    this.problemForm = this.formBuilder.group({
      name: ['', Validators.required],
      problemText: ['', Validators.required],
      solutionText: ['', Validators.required]
    });
  }

  get f() { return this.problemForm.controls; }

  onSubmit() {
    if (this.problemForm.invalid) {
      console.log('bad');
      return;
    }
    this.loading=true;
    let name : string = this.problemForm.value.name;
    let problemText : string = this.problemForm.value.problemText;
    let solutionText : string = this.problemForm.value.solutionText;
    let images  = this.images;
    this.problemService.postProblem(name, problemText, solutionText, images)
      .subscribe(data => this.router.navigate(['problem/', data.id]));
    this.loading=false;
  }

  upload(event) {
    console.log(event.target.files[0]);
    this.images.push(event.target.files[0]);
    //console.log(this.problemService.postImage(event.target.files[0]));
  }
  deleteImg(image){
    let i = this.images.indexOf(image);
    this.images.splice(i,1);
  }
}
