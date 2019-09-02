import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Game from '@/components/Game.vue';

const localVue = createLocalVue();

import BootstrapVue from 'bootstrap-vue';
localVue.use(BootstrapVue);

describe('Game.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Game, {
        stubs: ['b-container', 'b-row', 'b-col'],
    });
  });
});
