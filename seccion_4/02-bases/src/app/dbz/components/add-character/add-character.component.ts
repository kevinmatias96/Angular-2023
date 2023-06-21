import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public characterr: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    // debugger

    // console.log(this.characterr);
    if( this.characterr.name.length === 0 ) return;

    this.onNewCharacter.emit( this.characterr );

    this.characterr =  {name: '', power: 0};
  }
}
