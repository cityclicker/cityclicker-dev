<template> 
    <div v-if="tile">
        <div class="tile h-100" style="background-color: this.tile.GetBackgroundColor()"
            v-on:click="showPopup = true"
        >
            <b-container fluid class="Tile-container">
                <div  v-if="showPopup">
                    <GameTileDetail 
                        v-bind:tile="tile"
                        v-on:close_popup="OnClose"
                    />
                </div>
                {{tile.GetBuilding()}}
            </b-container>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import GameTileDetail from '@/components/GameTileDetail.vue';

import Tile from '@/game/models/tile';

@Component({
  components: {
    GameTileDetail,
  },
})
export default class GameTile extends Vue {
    @Prop() public tile!: Tile;

    private showPopup: boolean = false;

    public OnClose() {
        this.showPopup = false;
    }

}
</script>

<style>
</style>