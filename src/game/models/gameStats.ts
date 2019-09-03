import { Currency } from '@/game/utils/enums';
import BalanceUtils from '@/game/utils/balances';

export default class GameStats {
    public balances: Map<Currency, number>;

    private _balanceUtils: BalanceUtils;

    constructor() {
        this._balanceUtils = new BalanceUtils();
        this.balances = this._balanceUtils.NewBalances();
    }

}
