import characters from './app';
import Character from './character';

export default class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);

    this.attack = 40;
    this.defence = 10;
  }
}
