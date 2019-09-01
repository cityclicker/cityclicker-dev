<template>
    <div>
        <b-container fluid class="map-container">
            <div v-if="map">
                <div v-for="x in map.GetSize()[0]" :key="x">
                    <b-row>
                        <div v-for="y in map.GetSize()[1]" :key="y">
                            <b-col>
                                <div class="tileContainer">
                                    <GameTile v-bind:tile="map.GetTile(x, y)"/>
                                </div>
                            </b-col>
                        </div>
                    </b-row>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import GameTile from '@/components/GameTile.vue';

import Map from '@/game/models/map';

@Component({
    components: {
        GameTile,
    },
})
export default class GameMap extends Vue {
    @Prop() public map!: Map;
}
</script>

<style>
    .tileContainer {
        height: 100px;
        width: 100px;
        border: 1px solid black;
    }
    .col {
        padding: 0 !important;
    }
</style>