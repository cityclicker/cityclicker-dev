import { Currency } from '@/game/utils/enums';

export default class BalanceUtils {
    public NewBalances(): Map<Currency, number>  {
        const value: Map<Currency, number > = new Map([
            [Currency.CITYBUX, 0],
        ]);

        return value;
    }
}
