<template>
    <div>
        <b-container fluid class="game-container">
            <GameMap v-bind:map='game.GetMap()' />
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import GameMap from '@/components/GameMap.vue';

import GameObject from '@/game/main';

@Component({
    components: {
        GameMap,
    },
})
export default class Game extends Vue {
    public game: GameObject = new GameObject();
}
</script>

<style>
</style>