import { createStore } from 'vuex'

import journal from '@/store/journal'


const store = createStore({
    modules: {
        journal
    }
})




export default store
