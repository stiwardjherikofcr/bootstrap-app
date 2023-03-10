import { Component, Input } from '@angular/core';
import { ICharacter } from '@interfaces/character.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() character!: ICharacter;

}
