import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 15000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 7000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 12000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 11000
    },
    {
      id: uuid(),
      name: 'Goten',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Bulma',
      power: 500
    }
  ];

  addCharacter(character: Character) {
    this.characters.push({...character, id: uuid()});
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
