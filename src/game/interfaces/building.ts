import BuildingProperties from '../models/buildings/buildingProperties';

export default interface Building {
    name: string;
    backgroundColor: string;

    IncrementLevel(): number;

    GetProperties(): BuildingProperties;
    GetLevel(): number;

    
}
