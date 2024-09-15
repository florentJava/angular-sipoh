import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [NgFor , NgIf],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component implements OnInit {

  show = true;


  articles: any = [
    {icon:"assets/Icon.png" , title:"Alerte instantannée" , content:" Envoi de messages de détresse et de localisation en temps réel à vos contacts d'urgence, police." },
    {icon:"assets/icon2.png" , title:'Enregistrement audio en <br> temps réel' , content:"Capturez l'audio en direct pour fournir des preuves en cas d'agression." },
    {icon:"assets/icon3.png" , title:"Système de Traçage en <br> Temps Réel" , content:"faites un suivi en temps réel de vos deplacements idéale pour vos enfants."},
    {icon:"assets/Icon4.png" , title:"Plateforme de soutien" , content:"assistance juridique et psychologique, groupe de discussion et chatbot"}    
  ]


  ngOnInit() {
    AOS.init({disable: false , 
      once: true,
    });//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
