<template>
    <div class="stats">
        <b-container fluid class="game-sidebar">
            <div v-if="gameStats">
                <h3>Stats</h3>
                <div>{{gameStats.balances.get(Currency.CityBux)}}</div>
                <div v-for="id in currencyStringsCache" :key="id">
                    {{currencyStringsCache[id]}}
                </div>
            </div>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import GameStats from '@/game/models/gameStats';
import { Currency } from '@/game/utils/enums';
import CurrencyStrings from '@/strings/currencyStrings';

@Component({
    components: {
    },
})
export default class Game extends Vue {
    @Prop() public gameStats?: GameStats;

    private currencyStringsCache: string[] = [];

    private currencyStrings: CurrencyStrings = new CurrencyStrings();

    public GetCurrencyStrings(): string[] {
        const list: string[] = [];

        if (this.gameStats) {
            const curStr = this.currencyStrings.GetStrings();

            // tslint:disable-next-line
            for (const c in Currency) {
                list[length - 1] = curStr.get((Currency as any)[c]) + ': ' 
                    + this.gameStats!.balances.get((Currency as any)[c]);
            }
        }

        this.currencyStringsCache = list;

        return list;

    }
}
</script>

<style>
</style>