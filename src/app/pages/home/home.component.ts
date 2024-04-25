import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  divs = [
    { id: 1, show: true, name: 'Local Rental', active: true },
    { id: 2, show: false, name: 'Outstation', active: false },
    { id: 3, show: false, name: 'Multi City', active: false },
    { id: 4, show: false, name: 'Airport Transfer', active: false },
    { id: 5, show: false, name: 'Self Drive (Goa)', active: false }
  ];

  toggleDiv(id: number) {
    this.divs.forEach(div => {
      div.show = div.id === id;
    });
  }
  setActiveButton(id: number) {
    this.divs.forEach(div => {
      div.active = div.id === id;
    });
  }
}
