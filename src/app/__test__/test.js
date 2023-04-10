
import Bowerman from "../bowerman";
import Zombie from "../zombie";
import Magician from "../magician";
import Team from "../team";


let bowerman = new Bowerman('Svet','bowerman');
let zombie = new Zombie('Oleg','zombie');
let magician = new Magician('Sergey', 'magician')

const team = new Team();

const iterator = team.iterator()

team.add(bowerman);
team.add(zombie);
team.add(magician);

const obj = {
    done: false,
    value: zombie,
    done: true,
    value: undefined,
}

test('testing iterator', () => { 
    iterator.next();
    const result = iterator.next();

    expect(result).toEqual(obj);
})

test('testing end iterator', () => { 
    iterator.next();
    const result = iterator.next();

    expect(result).toEqual({
        done: true,
        value: undefined,
    });
})