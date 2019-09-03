import { assert } from 'chai';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import TileComponent from '@/components/GameTile.vue';
import Tile from '@/game/models/tile';
import BaseBuilding from '@/game/models/buildings/baseBuilding';
import Coordinates from '@/game/models/coordinates';


describe('GameTile.vue', () => {
    const pos = { xPos: 1, yPos: 1 };

    const getWrapper: any = () => {
        const tile = new Tile(pos);
        const wrapper = shallowMount(TileComponent, {
            propsData: {
                tile,
            },
            stubs: ['b-container'],
        });

        return wrapper;
    };

    it('renders background color', () => {
        const tile = new Tile(pos);
        const wrapper = getWrapper();

        const style = wrapper.find('.tile').attributes('style');

        if (style) {
            assert(style.indexOf(tile.building.backgroundColor) >= 0, 
                `Actual ${wrapper.find('.tile').attributes('style')}`);
        }
    });

    it('changes color on update', () => {
        const wrapper = getWrapper();

        const building = new BaseBuilding();

        wrapper.setProps({tile: new Tile(new Coordinates( 1, 2 ), building)});

        const style = wrapper.find('.tile').attributes('style');

        if (style) {
            assert(style.indexOf(building.backgroundColor) >= 0,
                `Actual ${wrapper.find('.tile').attributes('style')} -- Expected ${building.backgroundColor}`);
        }
    });

    it('shows popup on click', () => {
        const wrapper = getWrapper();

        wrapper.find('.tile').trigger('click');

        assert(wrapper.find('.tileModal'));
    });

    it('hides popup on emit', () => {
        const wrapper = getWrapper();

        wrapper.find('.tile').trigger('click');

        wrapper.vm.$emit('close_popup');

        assert(wrapper.emitted('close_popup'), `Actual: ${wrapper.emitted('close_popup')}`);

        assert(wrapper.find('.tileModal').exists() === false, `Actual: ${wrapper.find('.tileModal')}`);
    });

    it('popup is repeatable', () => {
        const wrapper = getWrapper();
 
        wrapper.find('.tile').trigger('click');

        wrapper.vm.$emit('close');

        wrapper.find('.tile').trigger('click');

        assert(wrapper.find('.tileModal'));

    });
});
