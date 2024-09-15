import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos'; //AOS - 1

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [NgIf],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component implements OnInit {

  show = true;


  ngOnInit() {
    AOS.init({disable: false , 
      once: true,
    });//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }


}
