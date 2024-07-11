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


  onclick(){
    this.Readmore=!this.Readmore
    this.visible=!this.visible
  }
  
  acteurList: any [] = [
    {acteurNom: 'Comptable'},
    {acteurNom: 'Administrateur'},
    {acteurNom: 'Agent'}
  ]
  TypeActeurList: any[] = [
    {typeActeurNom: 'TP'},
    {typeActeurNom: 'TM'},
  ]


  onclick1(acteur: { acteurNom: string }){
    this.Acteur=acteur.acteurNom;
  }
  onclick0(TypeActeur: {typeActeurNom: string}){
    this.TypeActeur=TypeActeur.typeActeurNom;
  }
}
