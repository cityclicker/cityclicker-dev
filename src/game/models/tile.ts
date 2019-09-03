import Building from '../interfaces/building';
import EmptyLot from './buildings/emptyLot';
import BuildingProperties from './buildings/buildingProperties';
import Coordinates from '@/game/models/coordinates';

export default class Tile {
    public building: Building;
    public coordinates: Coordinates;

    constructor(coordinates: Coordinates, building?: Building) {
        if (building) {
            this.building = building;
        } else {
            this.building = new EmptyLot();
        }

        this.coordinates = coordinates;
    }

    public GetProperties(): BuildingProperties {
        return this.building.GetProperties();
    }
}
