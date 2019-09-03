<template> 
    <div
        class="tile h-100" 
        v-on:click="showPopup = true"
        v-bind:style="{'background-color': tile.building.backgroundColor}"
    >
        <b-container fluid class="tile-container h-100" >
            <div  v-if="showPopup">
                <GameTileDetail 
                    v-bind:tile="tile"
                    v-on:close_popup="OnClose"
                />
            </div>
            {{tile.building.name}}
            {{tile.coordinates}}
        </b-container>
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