import Building from '../../interfaces/building';
import BuildingProperties from './buildingProperties';

export default class BaseBuilding implements Building {
    public name: string;
    protected _level: number;  
    protected _backgroundColor: string;

    constructor() {
        this.name = 'BaseBuilding';
        this._level = 1;       
        this._backgroundColor = 'rgb(29, 29, 225)';
    }

    public GetLevel(): number {
        return this._level;
    }

    public IncrementLevel(): number {
        this._level++;

        return this.GetLevel();
    }

    public GetBackgroundColor(): string {
        return this._backgroundColor;
    }

    public GetProperties(): BuildingProperties {
        return new BuildingProperties(this);
    }
}
