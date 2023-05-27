import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter() {

    if(this.newCharacter.name.length === 0) return;

    this.onNewCharacter.emit(this.newCharacter);
    this.newCharacter = {
      id: uuid(),
      name: '',
      power: 0
    }
  }
}
