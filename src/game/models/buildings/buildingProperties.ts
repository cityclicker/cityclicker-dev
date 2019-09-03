import Building from '../../interfaces/building';

export default class BuildingProperties {
    public readonly level: number;
    public readonly name: string;
    public readonly backgroundColor: string;

    constructor(building: Building) {
        this.level = building.GetLevel();
        this.name = building.name;
        this.backgroundColor = building.backgroundColor;
    }
}
