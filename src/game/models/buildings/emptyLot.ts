import BaseBuilding from './baseBuilding';
import BuildingProperties from './buildingProperties';

export default class EmptyLot extends BaseBuilding {

    constructor() {
        super();

        this.name = 'EmptyLot';
        this.backgroundColor = 'rgb(224, 224, 209)';
    }

    public GetLevel(): number {
        return 0;
    }

    public IncrementLevel(): number {
        return 0;
    }
}
