import characters from './app';
import Character from './character';

export default class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);

    this.attack = 10;
    this.defence = 40;
  }
}
