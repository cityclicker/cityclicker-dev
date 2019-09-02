import { Currency, ActionResult } from '@/game/utils/enums';
import BalanceUtils from '@/game/utils/balances';


export default class Player {

    private _balanceUtils: BalanceUtils;
    private _balances: Record<Currency, number>;

    constructor() {
        this._balanceUtils = new BalanceUtils();
        this._balances = this._balanceUtils.NewBalances();
    }

    public GetBalance(currencyType: Currency): number {
        return this._balances.CITYBUX;
    }

    public RecieveIncome(currencyType: Currency, incomeAmount: number): ActionResult {
        if (incomeAmount < 0) {
            return ActionResult.InvalidInput;
        }

        this._balances.CITYBUX += incomeAmount;

        return ActionResult.Success;
    }

    public MakePurchase(currencyType: Currency, incomeAmount: number): ActionResult {
        if (incomeAmount < 0) {
            return ActionResult.InvalidInput;
        }

        this._balances.CITYBUX -= incomeAmount;

        return ActionResult.Success;
    } 
}
