import { assert } from 'chai';
import BaseBuilding from '@/game/models/buildings/baseBuilding';

describe('baseBuilding.ts', () => {
    describe('GetLevel()', () => {
        it('returns 1', () => {
            const lot = new BaseBuilding();

            assert(lot.GetLevel() === 1);
        });
    });

    describe('IncrementLevel()', () => {
        it('returns 2', () => {
            const lot = new BaseBuilding();

            assert(lot.IncrementLevel() === 2);
        });

        it('GetLevel() updates to 2', () => {
            const lot = new BaseBuilding();
            lot.IncrementLevel();

            assert(lot.GetLevel() === 2);
        });

        it('increments multiple times', () => {
            const lot = new BaseBuilding();
            lot.IncrementLevel();
            lot.IncrementLevel();

            assert(lot.GetLevel() === 3);
        });
    });
});
