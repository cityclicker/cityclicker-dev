import Building from '../interfaces/building';
import EmptyLot from './buildings/emptyLot';
import BuildingProperties from './buildings/buildingProperties';
import Coordinates from '@/game/interfaces/coordinates';

export default class Tile {
    private _building: Building;
    private _coordinates: Coordinates;

    constructor(coordinates: Coordinates, building?: Building) {
        if (building) {
            this._building = building;
        } else {
            this._building = new EmptyLot();
        }

        this._coordinates = coordinates;
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

    public GetCoordinates(): Coordinates {
        return {xPos: 1, yPos: 1};
    }

    public GetProperties(): BuildingProperties {
        return this._building.GetProperties();
    }
}
