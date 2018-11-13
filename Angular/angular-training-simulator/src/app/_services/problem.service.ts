import { Injectable } from '@angular/core';
import { Problem } from '../_models';
import { prList } from '../problem-list/problems'


@Injectable()
export class ProblemService {
    constructor() {	}

    getProblems(): Problem[] {
        return prList;
      }
}