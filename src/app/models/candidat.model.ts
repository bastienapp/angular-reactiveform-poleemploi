export class Candidat {

  constructor(
    public id: string | null,
    public nom: string,
    public prenom: string,
    public email: string,
    public password: string,
    public codePostal?: string,
    public dateDeNaissance?: Date
  ) { }
}
