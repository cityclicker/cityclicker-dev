<template>
    <div>
        <b-container fluid class="game-sidebar">
            <div class="stats" v-if="gameStats">
                <h3>Stats</h3>
                <div>{{gameStats.balances.CITYBUX}}</div>
                <div v-for="id in GetCurrencyStrings()" :key="id">
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
        return [];

    }
}
</script>

<style>
</style>