import Map from './models/map';

export default class Main {
    private _running: boolean;
    private _timeAlive: number;
    private _map: Map;

    constructor(map?: Map) {
        this._running = false;
        this._timeAlive = 0;
        this._map = map ? map : new Map( 4, 4 );
    }

    public Start() {
        this._running = true;
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

    private _loop() {
        if (this._running) {
            this._timeAlive++;

            setTimeout(() => {
                this._loop();
            }, 10);
        }
    }
}
