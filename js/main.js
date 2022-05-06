class Character{
    constructor(name, race, stats, equipment, level){
        this._name=name
        this._race=race
        this._stats=stats
        this.equipment=equipment
        this._level=level
    }
    get name(_name){
        return _name
    }
    get race(_race){
        return _race
    }
    get stats(_stats){
        return _stats
    }
    get level(_level){
        return _level
    }
}
