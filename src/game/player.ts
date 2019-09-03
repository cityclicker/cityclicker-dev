import { Currency, ActionResult } from '@/game/utils/enums';
import BalanceUtils from '@/game/utils/balances';


export default class Player {

    private _balanceUtils: BalanceUtils;
    private _balances: Map<Currency, number>;

    constructor() {
        this._balanceUtils = new BalanceUtils();
        this._balances = this._balanceUtils.NewBalances();
    }

    public GetBalance(currencyType: Currency): number {
        const value = this._balances.get(Currency.CityBux);
        return value ? value : 0;
    }

    public RecieveIncome(currencyType: Currency, incomeAmount: number): ActionResult {
        if (incomeAmount < 0) {
            return ActionResult.InvalidInput;
        }

        let value = this._balances.get(Currency.CityBux);

        if (!value) {
            value = 0;
        }
        this._balances.set(Currency.CityBux, value + incomeAmount);

        return ActionResult.Success;
    }

    public MakePurchase(currencyType: Currency, incomeAmount: number): ActionResult {
        if (incomeAmount < 0) {
            return ActionResult.InvalidInput;
        }

        let value = this._balances.get(Currency.CityBux);

        if (!value) {
            value = 0;
        }
        this._balances.set(Currency.CityBux, value - incomeAmount);

        return ActionResult.Success;
    } 
}
