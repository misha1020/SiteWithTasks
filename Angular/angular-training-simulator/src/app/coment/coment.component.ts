import { Component, OnInit, Input } from '@angular/core';
import { Coment } from '../_models';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
  @Input() coment: Coment;
  constructor() { }

  ngOnInit() {
  }

}
