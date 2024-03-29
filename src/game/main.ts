import now from 'performance-now';

import Map from './models/map';
import GameStats from './models/gameStats';
import Player from './player';
import { Currency } from './utils/enums';
import StartingValues from '@/game/interfaces/startingValues';

export default class Main {
    public gameStats: GameStats;
    public map: Map;
    public player: Player;

    private _running: boolean;
    private _timeAlive: number;
    private _frameRate: number;
    private _lastTick: number;

    constructor(values?: StartingValues) {
        this.gameStats = new GameStats();
        this.map = values && values.map ? values.map : new Map(4, 4);
        this.player = values && values.player ? values.player : new Player();

        this._running = false;
        this._timeAlive = this._lastTick = 0;
        this._frameRate = values && values.frameRate ? values.frameRate : 40;

        // starting cash
        if (values) {
            if (!values.startingCash || values.startingCash < 10) {
                values.startingCash = 10;
            }
            this.player.RecieveIncome(Currency.CITYBUX, values.startingCash);
        } else {
            this.player.RecieveIncome(Currency.CITYBUX, 10);
        }
    }

    public Start() {
        this._running = true;
        this._lastTick = now();
        this._loop();
    }

    public Stop() {
        this._running = false;
    }

    public Running() {
        return this._running;
    }

    public TimeAlive() {
        return this._timeAlive;
    }

    public RunNextTick() {
        this._runTick(1);
    }


    private _loop() {
        if (this._running) {

            const newNow = now();
            const timeSinceLast = newNow - this._lastTick;
            this._lastTick = newNow;


            this._runTick(timeSinceLast);

            setTimeout(() => {
                this._loop();
            }, this._frameRateInMilliseconds());
        }
    }

    private _runTick(timeSinceLast: number) {
        this._timeAlive += timeSinceLast;
    }

    private _frameRateInMilliseconds(): number {
        // calculated framereate with default of 25 (40 fps)
        return this._frameRate !== 0 ? 1000 / this._frameRate : 25;
    }
}
