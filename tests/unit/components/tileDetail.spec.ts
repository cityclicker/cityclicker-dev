import { assert } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import GameTileDetail from '@/components/GameTileDetail.vue';
import Tile from '@/game/models/tile';

const localVue = createLocalVue();

import BootstrapVue from 'bootstrap-vue';
localVue.use(BootstrapVue);

describe('GameTileDetail.vue', () => {
    const pos = {xPos: 1, yPos: 1};

    it('closes when button is clicked', () => {
        const tile = new Tile(pos);
        const wrapper = shallowMount(GameTileDetail, {
            propsData: {
                tile,
            },
        });

        wrapper.find('.modal-default-button').trigger('click');
        
        assert(wrapper.emitted('close_popup'));
    });

    it('shows the building name in header', () => {
        const tile = new Tile(pos);
        const wrapper = shallowMount(GameTileDetail, {
            propsData: {
                tile,
            },
        });

        assert(wrapper.find('.modal-header').text() === tile.GetProperties().name, `Actual ${wrapper.find('.modal-header').text()} -- Expected ${tile.GetProperties().name}`);
    });
    describe('modal body', () => {
        it('shows building stats in body', () => {
            const tile = new Tile(pos);
            const wrapper = shallowMount(GameTileDetail, {
                propsData: {
                    tile,
                },
            });

            const actual = wrapper.find('.modal-body').text();

            assert(actual.indexOf(tile.GetProperties().level.toString()) > 0, `Actual ${actual} -- Expected ${tile.GetProperties().level}`);
            assert(actual.indexOf(tile.GetCoordinates().xPos.toString()) > 0 &&
                actual.indexOf(tile.GetCoordinates().yPos.toString()) > 0,
                `Actual ${actual} -- Expected ${tile.GetProperties().level}`);
        });
    });
});
