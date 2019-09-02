import { assert } from 'chai';
import Tile from '@/game/models/tile.ts';

import BaseBuilding from '@/game/models/buildings/baseBuilding';

describe('tile.ts', () => {
    const pos = { xPos: 3, yPos: 4 };

    describe('GetBuilding()', () => {
        it('returns type name', () => {
            const tile = new Tile(pos);
            const name = tile.GetBuilding();

            assert(name.length !== 0, 'Name is empty');
        });
    });

    describe('SetBuilding()', () => {
        it('returns new type name', () => {
            const tile = new Tile(pos);
            const name = tile.SetBuilding(new BaseBuilding());
            
            assert(name === 'BaseBuilding');
        });

        it('sets value from get', () => {
            const tile = new Tile(pos);

            tile.SetBuilding(new BaseBuilding());

            const name = tile.GetBuilding();
            
            assert(name === 'BaseBuilding');
        });
    });

    describe('GetBackgroundColor()', () => {
        it('matches the building color', () => {
            const tile = new Tile(pos);
            const building = new BaseBuilding();

            tile.SetBuilding(building);

            assert(tile.GetBackgroundColor() === building.GetBackgroundColor());
        });
    });

    describe('GetCoordinates()', () => {
        it('returns tile coordinates', () => {
            const tile = new Tile(pos);

            assert(tile.GetCoordinates().xPos === pos.xPos && tile.GetCoordinates().yPos === pos.yPos);
        });
    });
});
