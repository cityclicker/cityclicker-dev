import { assert } from 'chai';
import Player from '@/game/player.ts';
import { Currency, ActionResult } from '@/game/utils/enums';

describe('player.ts', () => {
    describe('GetCurrency()', () => {
        it('has an initial 0 balance', () => {
            const player = new Player();

            assert(player.GetBalance(Currency.CITYBUX) === 0 );
        });
    });

    describe('RecieveIncome()', () => {
        it('returns success with a valid value', () => {
            const player = new Player();

            const result = player.RecieveIncome(Currency.CITYBUX, 10);
            const expected = ActionResult.Success;

            assert( result === expected, result );
        });

        it('updates balance', () => {
            const player = new Player();

            player.RecieveIncome(Currency.CITYBUX, 10);

            const result = player.GetBalance(Currency.CITYBUX);
            const expected = 10;

            assert(result === expected, result.toString());
        });

        it('doesnt allow negative values', () => {
            const player = new Player();

            const result = player.RecieveIncome(Currency.CITYBUX, -10);
            const expected = ActionResult.InvalidInput;

            assert(result === expected, result);
        });

        describe('GetIncome()', () => {
            it('returns success with a valid value', () => {
                const player = new Player();

                const result = player.RecieveIncome(Currency.CITYBUX, 10);
                const expected = ActionResult.Success;

                assert(result === expected, result);
            });

            it('updates balance', () => {
                const player = new Player();

                player.RecieveIncome(Currency.CITYBUX, 10);

                player.MakePurchase(Currency.CITYBUX, 5);

                const result = player.GetBalance(Currency.CITYBUX);
                const expected = 5;

                assert(result === expected, result.toString());
            });

            it('doesnt allow negative values', () => {
                const player = new Player();

                const result = player.MakePurchase(Currency.CITYBUX, -10);
                const expected = ActionResult.InvalidInput;

                assert(result === expected, result);
            });
        });
    });
});
