import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];

  heroRemoved: string = '';

  borrarHeroe() {
    this.heroRemoved = this.heroes.pop() || '';
  }
}
