import { Currency } from '@/game/utils/enums';

export default class BalanceUtils {
    public NewBalances(): Record<Currency, number>  {
        const value: Record<Currency, number > = {
            CITYBUX: 0,
        };

        return value;
    }
}
