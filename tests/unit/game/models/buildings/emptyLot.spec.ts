import { assert } from 'chai';
import EmptyLot from '@/game/models/buildings/emptyLot';

describe('emptyLot.ts', () => {
    describe('GetLevel()', () => {
        it('returns 0', () => {
            const lot = new EmptyLot();

            assert(lot.GetLevel() === 0);
        });
    });

    describe('IncrementLevel()', () => {
        it('returns 0', () => {
            const lot = new EmptyLot();

            assert(lot.IncrementLevel() === 0);
        });

        it('GetLevel() remains 0', () => {
            const lot = new EmptyLot();
            lot.IncrementLevel();

            assert(lot.GetLevel() === 0);
        });
    });
});
