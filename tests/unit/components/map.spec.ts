import { assert } from 'chai';
import { mount, shallowMount } from '@vue/test-utils';
import MapComponent from '@/components/GameMap.vue';
import TileComponent from '@/components/GameTile.vue';

import Map from '@/game/models/map';

describe('GameMape.vue', () => {
    it('renders as many children as the map requests', () => {
        const map = new Map( 2, 2 );
        const wrapper = shallowMount(MapComponent, {
            propsData: {
                map,
            },
        });

        assert(wrapper.findAll(TileComponent).length === 4);


    });
});
