<template>
    <div class="stats">
        <b-container fluid class="game-sidebar">
            <div>
                <h3>Stats</h3>
                <div v-for="id in gameStats.balances.keys()" :key="id">
                    {{id}}: {{gameStats.balances.get(id)}}
                </div>
            </div>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import GameStats from '@/game/models/gameStats';
import { Currency } from '@/game/utils/enums';

@Component({
    components: {
    },
})
export default class Game extends Vue {
    @Prop() public gameStats?: GameStats;

    private currencyStringsCache: string[] = [];
    private currency = Currency;
}
</script>

<style>
</style>