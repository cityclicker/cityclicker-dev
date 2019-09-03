import Tile from './tile';
import Coordinates from '@/game/models/coordinates';

export default class Map {
    public tiles: Tile[][];

    private _xSize: number;
    private _ySize: number;

    constructor(xSize: number, ySize: number) {
        this._xSize = xSize;
        this._ySize = ySize;
        this.tiles = [[]];

        for (let x = 0; x < xSize; x++) {
            this.tiles[x] = [];
            for (let y = 0; y < xSize; y++) {
                this.tiles[x][y] = new Tile(new Coordinates(x, y));
            }
        }
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
