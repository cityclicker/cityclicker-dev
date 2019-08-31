import { assert } from 'chai';
import Map from '@/game/models/map.ts';

describe('map.ts', () => {
    describe('GetTile()', () => {
        it('returns a tile object', () => {
            const map = new Map( 2, 2 );

            const tile = map.GetTile({xPos: 1, yPos: 1});

            assert(tile.GetBuilding() === 'EmptyLot');
        });
    });

    describe('GetSize()', () => {
        const runs: Array<[number, number]> = [
            [ 2, 2 ],
            [ 3, 1 ],
        ];

        for ( const run of runs) {
            it('returns map size', () => {
                const map = new Map( run[0] , run[1] );

                const expected: [ number, number ] = [ run[0], run[1] ];

                assert(map.GetSize()[0] === expected[0], `Actual: ${map.GetSize()[0]} & Expected: ${expected[0]}`);
                assert(map.GetSize()[1] === expected[1], `Actual: ${map.GetSize()[1]} & Expected: ${expected[1]}`);
            });
        }
    });

    describe('SetSize()', () => {
        const runs: Array<[number, number]> = [
            [ 2, 2 ],
            [ 3, 1 ],
        ];

        for ( const run of runs) {
            it('returns map size', () => {
                const map = new Map( 5 , 5 );
                const actual = map.SetSize(run[0], run[1]);

                const expected: [ number, number ] = [ run[0], run[1] ];

                assert(actual[0] === expected[0], `Actual: ${actual[0]} & Expected: ${expected[0]}`);
                assert(actual[1] === expected[1], `Actual: ${actual[1]} & Expected: ${expected[1]}`);

            });

            it('sets map size', () => {
                const map = new Map( 5 , 5 );
                const actual = map.SetSize(run[0], run[1]);

                const expected: [ number, number ] = [ run[0], run[1] ];

                assert(map.GetSize()[0] === expected[0], `Actual: ${map.GetSize()[0]} & Expected: ${expected[0]}`);
                assert(map.GetSize()[1] === expected[1], `Actual: ${map.GetSize()[1]} & Expected: ${expected[1]}`);
            });

            describe('handles missing values', () => {
                it('missing y', () => {
                    const map = new Map( 5 , 5 );
                    const actual = map.SetSize( run[0] );

                    const expected: [ number, number ] = [ run[0], 5 ];

                    assert(map.GetSize()[0] === expected[0], `Actual: ${map.GetSize()[0]} & Expected: ${expected[0]}`);
                    assert(map.GetSize()[1] === expected[1], `Actual: ${map.GetSize()[1]} & Expected: ${expected[1]}`);
                });

                it('missing x', () => {
                    const map = new Map( 5 , 5 );
                    const actual = map.SetSize(undefined,  run[1] );

                    const expected: [ number, number ] = [ 5, run[1] ];

                    assert(map.GetSize()[0] === expected[0], `Actual: ${map.GetSize()[0]} & Expected: ${expected[0]}`);
                    assert(map.GetSize()[1] === expected[1], `Actual: ${map.GetSize()[1]} & Expected: ${expected[1]}`);
                });
            });
        }
    });
});
