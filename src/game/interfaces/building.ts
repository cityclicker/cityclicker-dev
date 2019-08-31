import BuildingProperties from '../models/buildings/buildingProperties';

export default interface Building {
    name: string;

    IncrementLevel(): number;

    GetProperties(): BuildingProperties;

    GetBackgroundColor(): string;
    GetLevel(): number;

    
}
