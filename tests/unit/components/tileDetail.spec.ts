import { assert } from 'chai';
import { shallowMount } from '@vue/test-utils';
import GameTileDetail from '@/components/GameTileDetail.vue';
import Tile from '@/game/models/tile';

describe('GameTileDetail.vue', () => {
    it('closes when button is clicked', () => {
        const tile = new Tile();
        const wrapper = shallowMount(GameTileDetail, {
            propsData: {
                tile,
            },
        });

        wrapper.find('.modal-default-button').trigger('click');
        
        assert(wrapper.emitted('close_popup'));
    });

    it('shows the building name in header', () => {
        const tile = new Tile();
        const wrapper = shallowMount(GameTileDetail, {
            propsData: {
                tile,
            },
        });

        assert(wrapper.find('.modal-header').text() === tile.GetProperties().name, `Actual ${wrapper.find('.modal-header').text()} -- Expected ${tile.GetProperties().name}`);
    });

    it('shows building stats in body', () => {
        const tile = new Tile();
        const wrapper = shallowMount(GameTileDetail, {
            propsData: {
                tile,
            },
        });

        const actual = wrapper.find('.modal-body').text();

        assert(actual.indexOf( tile.GetProperties().level.toString()) > 0, `Actual ${actual} -- Expected ${tile.GetProperties().level}`);

    });
});
