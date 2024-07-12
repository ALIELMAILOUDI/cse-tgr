import { Component } from '@angular/core';

@Component({
  selector: 'app-user-selection',
  standalone: true,
  imports: [],
  templateUrl: './user-selection.component.html',
  styleUrl: './user-selection.component.css'
})
export class UserSelectionComponent {
  Readmore:boolean = true
  visible:boolean = false
  Acteur:String = "Acteur"
  TypeActeur:String = "Type Acteur"
  PosteComptable:String= "Poste Comptable"
  Administration:String= "Administration"
  TypeCSE:String="Type CSE"
  Etat:String="Etat"
  Annee:number | string="Année"
  Trimestre:String="Trimestre"
  selectedTypeActeurs: string[] = [];
  selectedPosteComptables: string[] = [];
  selectedTypeCSE: string[] = [];
  selectedetats: string[] = [] ;
  selectedAnnee: number[] = [] ;
  selectedTrimestre: number[] = [];


  onclick(){
    this.Readmore=!this.Readmore
    this.visible=!this.visible
  }
  

  TypeActeurList: any[] = [
    {typeActeurNom: 'TP'},
    {typeActeurNom: 'TM'},
  ]
  PosteComptableList: any[] = [
    {posteComptableNom:'1047 TRESORIE PROVAINCIAL DE MISSOUR'},
    {posteComptableNom:'1041 TRESORIE PROVAINCIAL DE AGADIR'},
    {posteComptableNom:'1000 TRESORIE PROVAINCIAL DE TETOUAN'},
    {posteComptableNom:'1001 TRESORIE PROVAINCIAL DE ELJADIDA'},
  ]
  TypeCSEList: any[] = [
    {typeCSENom:'PJ'},
    {typeCSENom:'PG'},
  ]
  EtatList: any[] = [
    {etatNom:'Déposé'},
    {etatNom:'Refusé'},
    {etatNom:'Accepté'}
  ]
  AnneeList: any[] = [
    {anneeNum: 2024},
    {anneeNum: 2023},
    {anneeNum: 2022},
    {anneeNum: 2021},
    {anneeNum: 2020},
    {anneeNum: 2019},
  ]
  TrimestreList: any[] = [
    {trimestreNum: 1},
    {trimestreNum: 2},
    {trimestreNum: 3},
    {trimestreNum: 4},
  ]


  

  toggleTypeCSESelection(typeCSE: { typeCSENom: string }, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedTypeCSE.push(typeCSE.typeCSENom);
    } else {
      this.selectedTypeCSE = this.selectedTypeCSE.filter(name => name !== typeCSE.typeCSENom);
    }
    this.TypeCSE = this.selectedTypeCSE.join(' et ');
  }
  toggleTypeActeurSelection(typeActeur: { typeActeurNom: string }, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedTypeActeurs.push(typeActeur.typeActeurNom);
    } else {
      this.selectedTypeActeurs = this.selectedTypeActeurs.filter(name => name !== typeActeur.typeActeurNom);
    }
    this.TypeActeur = this.selectedTypeActeurs.join(' et ');
  }
  togglePosteComptableSelection(PosteComptable: {posteComptableNom: string},event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedPosteComptables.push(PosteComptable.posteComptableNom);
    } else {
      this.selectedPosteComptables = this.selectedPosteComptables.filter(name => name !== PosteComptable.posteComptableNom);
    }
    this.PosteComptable = this.selectedPosteComptables.join(' , ');
  }
  toggleEtatSelection(etat: {etatNom: string},event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedetats.push(etat.etatNom);
    } else {
      this.selectedetats = this.selectedetats.filter(name => name !== etat.etatNom);
    }
    this.Etat = this.selectedetats.join(' , ');
  }
  toggleAnneeSelection(annee: {anneeNum: number},event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedAnnee.push(annee.anneeNum);
    } else {
      this.selectedAnnee = this.selectedAnnee.filter(name => name !== annee.anneeNum);
    }
    this.Annee = this.selectedAnnee.join(' , ');
  }
  toggleTrimestreSelection(trimestre: {trimestreNum: number},event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedTrimestre.push(trimestre.trimestreNum);
    } else {
      this.selectedTrimestre = this.selectedTrimestre.filter(name => name !== trimestre.trimestreNum);
    }
    this.Trimestre = this.selectedTrimestre.join(' , ');
  }
}
