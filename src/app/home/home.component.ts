import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../ui/footer/footer.component';
import { Section1Component } from '../ui/home/section1/section1.component';
import { Section2Component } from '../ui/home/section2/section2.component';
import { Section3Component } from '../ui/home/section3/section3.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent , Section1Component , Section1Component , Section2Component, Section3Component , FooterComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  // encapsulation: ViewEncapsulation.None

})
export class HomeComponent {
  show = true;

}
