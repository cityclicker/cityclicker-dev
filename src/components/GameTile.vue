<template> 
    <div class="tile h-100" v-bind:style="style"
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

  private showPopup: boolean = false;

  private style: object = {
      'background-color': this.tile.GetBackgroundColor()
  }

  public OnClose() {
      this.showPopup = false;
  }

}
</script>

<style>
</style>