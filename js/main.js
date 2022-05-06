class Character{
    constructor(name, race, stats, equipment, level){
        this.name=name
        this.race=race
        this.stats=stats
        this.equipment=equipment
        this.level=level
    }

    rollDice(){
        return Math.floor(Math.random() * 20)
    }

    attack(target, attackType){}
}


class Rogue extends Character{
    constructor(){
        super(name, race, stats, level)
        equipment = ["rapier", "shortsword", "burglar's pack", "leather armor", "two daggers", "thieves' tools"]
    }
        sneakAttack(){
            return `Target takes ${stats} damage`
        }
        thievesCant(){
            return `${name} sends a secret message`
        }
    
}

class Fighter extends Character {
    constructor(name, race, stats, equipment, level, fightingStyle, range){
        super(name, race, stats, equipment, level);

        this.fightingStyle = fightingStyle;
        this.range = range;
    }
}

