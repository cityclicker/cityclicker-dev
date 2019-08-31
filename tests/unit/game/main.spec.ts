import { assert } from 'chai';
import Main from '@/game/main.ts';

describe('main.ts', () => {
    describe('inital values', () => {
        it('Game is initially stopped', () => {
            const game = new Main();

            assert(!game.Running());
        });

        it('Running doesnt change TimeAlive over time', (done) => {
            const game = new Main();
    
            game.Start();

            game.Stop();
  
            const initial = game.TimeAlive();

            setTimeout(() => {
                assert( game.TimeAlive() === initial, `unexpected values ${game.TimeAlive()}, ${initial}`);
                done();
            }, 100);
        });
    });

    describe('Start()', () => {
        it('Responds to start', () => {
            const game = new Main();

            game.Start();

            assert(game.Running());
        });

        it('Running increments TimeAlive', () => {
            const game = new Main();

            game.Start();
    
            assert(game.TimeAlive() > 0);
        });
    
        it('Running changes TimeAlive over time', (done) => {
            const game = new Main();
    
            game.Start();
  
            const initial = game.TimeAlive();

            setTimeout(() => {
                assert( game.TimeAlive() > initial, `unexpected values ${game.TimeAlive()}, ${initial}`);
                done();
            }, 100);
        });
    });

    describe('Stop()', () => {
        it('Responds to stop', () => {
            const game = new Main();

            game.Start();
            game.Stop();

            assert(!game.Running());
        });
    });
});
