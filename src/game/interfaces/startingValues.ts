import Map from '@/game/models/map';
import Player from '@/game/player';

export default interface StartingValues {
    map?: Map;
    player?: Player;
    startingCash?: number;
    frameRate?: number;
}
