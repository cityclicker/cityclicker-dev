<template>
    <div>
        <b-container fluid class="game-container">
            <b-col cols="10">
                <GameMap v-bind:map='game.map' />
            </b-col>
            <b-col cols="2">
                <GameSidebar v-bind:stats='game.gameStats' />
            </b-col>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import GameMap from '@/components/GameMap.vue';
import GameSidebar from '@/components/GameSidebar.vue';

import GameObject from '@/game/main';

@Component({
    components: {
        GameMap,
        GameSidebar,
    },
})
export default class Game extends Vue {
    public game: GameObject = new GameObject();
}
</script>

<style>
</style>