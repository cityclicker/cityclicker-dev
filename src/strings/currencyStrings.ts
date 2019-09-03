import { Currency } from '@/game/utils/enums';

export default class CurrencyStrings {

    private _english: Map<Currency, string> = new Map<Currency, string>([
        [Currency.CityBux, 'CityBux'],
    ]);

    public GetStrings(language?: string): Map<Currency, string> {
        return this._english;
    }
}
