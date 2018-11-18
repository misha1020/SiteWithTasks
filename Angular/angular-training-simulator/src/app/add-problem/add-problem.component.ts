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
  problemImages: File[];
  solutionImages: File[];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AuthenticationService,
              private problemService:ProblemService) { }

  ngOnInit() {
    this.problemImages = [];
    this.solutionImages = [];
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
    let images  = this.problemImages;
    this.problemService.postProblem(name, problemText, solutionText, this.problemImages, this.solutionImages)
      .subscribe(data => this.router.navigate(['problem/', data.id]));
    this.loading=false;
  }

  uploadPr(event) {
    console.log(event.target.files[0]);
    this.problemImages.push(event.target.files[0]);
  }
  
  uploadSl(event) {
    console.log(event.target.files[0]);
    this.solutionImages.push(event.target.files[0]);
  }

  deleteImgPr(image){
    let i = this.problemImages.indexOf(image);
    this.problemImages.splice(i,1);
  }

  deleteImgSl(image){
    let i = this.solutionImages.indexOf(image);
    this.solutionImages.splice(i,1);
  }

  sub(str: string){
    if (str.length > 20)
      return str.substring(0,12) + "..." + str.substring(str.length - 8 -4,str.length);
    else
      return str;
  }
}