import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  

  ngOnInit() {
    // Récupérer la visibilité initiale du paragraphe


  }

  constructor( private router: Router, private el: ElementRef, private renderer: Renderer2) {}







  toggleNavbar() {

    const element = document.querySelector('#adapt') as HTMLElement;
    if (element) {
      const classList = element.classList;
      if(classList.contains('visible') ){

        this.renderer.removeClass(element, 'visible');
        this.renderer.addClass(element, 'hidden');

      }else if(classList.contains('hidden')){


        this.renderer.removeClass(element, 'hidden');
        this.renderer.addClass(element, 'visible');

      }else{
        this.renderer.addClass(element, 'visible');
      }


    }



  }




}
