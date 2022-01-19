import { createStore } from 'vuex'
import getUrlParam from "@/hooks/getUrlParam";
console.log(`Image URL:`, getUrlParam('url'));

export default createStore({
  state: {
    workUrlImage: NaN
  },
  mutations: {
    getUrl(state) { 
      state.workUrlImage = getUrlParam('url')
    }
  },
  actions: {
  },
  modules: {
  }
})
