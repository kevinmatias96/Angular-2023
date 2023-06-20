import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7500
  }
];

  onNewCharacterr( characteer: Character):void {
    console.log('MainPage');
    console.log(characteer);
  }

}
