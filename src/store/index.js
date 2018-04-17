import Vue from 'vue'
import Vuex from 'vuex'

import numStore from '../store/modules/num_store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    num: numStore
  }
})
