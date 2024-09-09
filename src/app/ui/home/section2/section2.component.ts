import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [NgFor],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {

  articles: any = [
    {icon:"assets/Icon.png" , title:"Alerte instantannée" , content:" Envoi de messages de détresse et de localisation en temps réel à vos contacts d'urgence, police." },
    {icon:"assets/icon2.png" , title:'Enregistrement audio en <br> temps réel' , content:"Capturez l'audio en direct pour fournir des preuves en cas d'agression." },
    {icon:"assets/icon3.png" , title:"Système de Traçage en <br> Temps Réel" , content:"faites un suivi en temps réel de vos deplacements idéale pour vos enfants."},
    {icon:"assets/Icon4.png" , title:"Plateforme de soutien" , content:"assistance juridique et psychologique, groupe de discussion et chatbot"}    
  ]

}
