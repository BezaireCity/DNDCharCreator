class Character{
    constructor(name, race, stats, equipment, level){
        this.name=name
        this.race=race
        this.stats=stats
        this.equipment=equipment
        this.level=level
    }
}

class Rogue extends Character{
    constructor(){
        super(name, race, stats, level)
    }
        inventory = ["rapier", "shortsword", "burglar's pack", "leather armor", "two daggers", "thieves' tools"]

        sneakAttack(){
            return `Target takes ${stats} damage`
        }
        thievesCant(){
            return `${name} sends a secret message`
        }
    
}
