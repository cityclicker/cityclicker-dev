import { assert } from 'chai';
import Tile from '@/game/models/tile.ts';

describe('tile.ts', () => {
    const pos = { xPos: 3, yPos: 4 };

    describe('GetCoordinates()', () => {
        it('returns tile coordinates', () => {
            const tile = new Tile(pos);

            assert(tile.coordinates.xPos === 3 && tile.coordinates.yPos === 4);
        });
    });
});
