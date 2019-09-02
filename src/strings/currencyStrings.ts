import { Currency } from '@/game/utils/enums';

export default class CurrencyStrings {

    private _english: Record<Currency, string> = {
        CITYBUX: 'CityBux',
    };

    public GetStrings(language?: string): Record<Currency, string> {
        return this._english;
    }
}
