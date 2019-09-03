<template>
    <div>
        <b-container fluid class="game-container">
            <b-row>
                <b-col class="col-9 justify-content-md-center">
                    <GameMap v-bind:map='game.map' />
                </b-col>
                <b-col class="col-2">
                    <GameSidebar v-bind:gameStats='game.gameStats' />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import GameMap from '@/components/GameMap.vue';
import GameSidebar from '@/components/GameSidebar.vue';

import Main from '@/game/main';

@Component({
    components: {
        GameMap,
        GameSidebar,
    },
})
export default class Game extends Vue {
    public game: Main = new Main();
}
</script>

<style>
</style>