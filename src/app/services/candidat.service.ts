import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  candidatList: Candidat[] = [];

  constructor() { }

  addCandidat(candidat: Candidat): void {

    this.candidatList.push(candidat);
  }
}
