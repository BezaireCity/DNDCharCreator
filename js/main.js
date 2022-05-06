class Character{
    constructor(name, race, stats, equipment, level){
        this._name=name
        this._race=race
        this._stats=stats
        this.equipment=equipment
        this._level=level
    }
    get name(_name){
        console.log(_name)
    }
    get race(_race){
        console.log(_race)
    }
    get stats(_stats){
        console.log(_stats)
    }
    get level(_level){
        console.log(_level)
    }
    rollToHit(opponentAC){
        const roll=Math.floor(Math.random()*20)
        ((roll+this._stats.STR.bonus+this.equipment.rollBonus)>opponentAC)? damageRoll(): console.log("Attack missed!")
    }
}
