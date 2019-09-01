import Tile from './tile';
import Coordinates from '../interfaces/coordinates';

export default class Map {

    private _xSize: number;
    private _ySize: number;

    constructor(xSize: number, ySize: number) {
        this._xSize = xSize;
        this._ySize = ySize;
    }   

    public GetTile(pos: Coordinates ): Tile {
        return new Tile(pos);
    }

    public GetSize(): [number, number] {
        return [ this._xSize, this._ySize ];
    }

    public SetSize(xSize?: number, ySize?: number): [number, number] {
        this._xSize = xSize ? xSize : this._xSize;
        this._ySize = ySize ? ySize : this._ySize;

        return this.GetSize();
    }
}
