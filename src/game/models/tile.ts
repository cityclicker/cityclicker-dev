import Building from '../interfaces/building';
import EmptyLot from './buildings/emptyLot';
import BuildingProperties from './buildings/buildingProperties';

export default class Tile {
    private _building: Building;

    constructor(building?: Building) {
        if (building) {
            this._building = building;
        } else {
            this._building = new EmptyLot();
        }
    }

    public SetBuilding(building: Building): string {
        this._building = building;
        return this.GetBuilding();
    }

    public GetBuilding(): string {
        return this._building.name;
    }

    public GetBackgroundColor(): string {
        return this._building.GetBackgroundColor();
    }

    public GetProperties(): BuildingProperties {
        return this._building.GetProperties();
    }
}
