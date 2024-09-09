import { Component } from '@angular/core';
import { FooterComponent } from '../ui/footer/footer.component';
import { NavbarComponent } from '../ui/navbar/navbar.component';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [NavbarComponent , FooterComponent],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent {

}
