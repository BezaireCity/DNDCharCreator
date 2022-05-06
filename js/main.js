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

class Fighter extends Character {
    constructor(name, race, stats, equipment, level, fightingStyle, range){
        super(name, race, stats, equipment, level);

        this.fightingStyle = fightingStyle;
        this.range = range;
    }

    attack(taget, attackType){
        // Attack target with attack type.
    }
}