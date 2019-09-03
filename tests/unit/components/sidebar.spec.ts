import { assert } from 'chai';
import { shallowMount, createLocalVue, Wrapper } from '@vue/test-utils';
import GameSidebar from '@/components/GameSidebar.vue';
import GameStats from '@/game/models/gameStats';

const localVue = createLocalVue();

import BootstrapVue from 'bootstrap-vue';
import { Currency } from '@/game/utils/enums';
localVue.use(BootstrapVue);

describe('GameSidebar.vue', () => {
    const getWrapper: any = () => {
        const stats = new GameStats();
        stats.balances.set(Currency.CityBux, 100);
        return shallowMount(GameSidebar, {
            propsData: {
                stats,
            },
            stubs: ['b-container', 'b-row', 'b-col'],
        });
    };

    describe('ui', () => {
        it('renders game stats', () => {
            const wrapper = getWrapper();

            const actual = wrapper.find('.stats').text();
            const expected = 100;

            assert(actual.indexOf(expected) > 0, `Actual ${actual} -- Expected ${expected}`);
        });
    });
});
