<template>
    <div class="tile" style="background-color: {tile.GetBackgroundColor()}"
        v-on:click="showPopup = true"
    >
        <GameTileDetail 
            v-bind:tile='tile' 
            v-if='showPopup'
            v-on:close="OnClose()"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Tile from '@/game/models/tile';
import GameTileDetail from '@/components/GameTileDetail.vue';

@Component({
  components: {
    GameTileDetail,
  },
})
export default class GameTile extends Vue {
  @Prop() public tile!: Tile;

  private _showPopup: boolean = false;

  private OnClose() {
      this._showPopup = false;
  }

}
</script>

<style>
</style>