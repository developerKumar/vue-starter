import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Foo from '../Foo.vue'
const localVue = createLocalVue()

localVue.use(Vuex)

describe('Foo.vue', () => {

    let store: any;

    beforeEach(() => {
        store = new Vuex.Store({
          state: {
              count: 9
          }
        })
      })

  test('renders count when passed', () => {
    const wrapper = shallowMount(Foo, {
        store,
        localVue
    })
    expect(wrapper.find(".counter"))
    expect(wrapper.find(".counter").text()).toBe("9")
  })
})