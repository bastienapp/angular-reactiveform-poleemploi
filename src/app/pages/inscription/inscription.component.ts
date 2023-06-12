import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Candidat } from 'src/app/models/candidat.model';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  candidat: Candidat | null = null;

  formData = this.fb.group({
    connexion: this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    }),
    candidat: this.fb.group({
      nom: [''],
      prenom: ['']
    }),
  })

  constructor(private fb: FormBuilder) { }

  onCreateCandidat() {

    if (this.formData.valid) {

      const {
        candidat: { nom, prenom },
        connexion: { email, password },
      } = this.formData.value as FormCandidat;

      this.candidat = new Candidat(null, nom, prenom, email, password);
    } else {
      alert("Y'a une erreur");
    }
  }
}

type FormCandidat = {
  candidat: {
    nom: string,
    prenom: string,
  },
  connexion: {
    email: string,
    password: string,
  },
}
