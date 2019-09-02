import { Currency, ActionResult } from '@/game/utils/enums';

export default class Player {

    private _balances: Record<Currency, number>;

    constructor() {
        this._balances = {
            CITYBUX: 0,
        };
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
