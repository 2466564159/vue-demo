import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            searchName: '',
            searchResults: [],
            pageSize: 20,
            total: 0,
            currentPage: 1,
            userObj: null,
            bvid: '',
            aid: ''
        }
    },
    mutations: {
        setSearchNameAction(state, val){
            state.searchName = val
        },
        setSearchResultsAction(state, val){
            state.searchResults = val
        },
        setPageSize(state, val){
            state.pageSize = val
        },
        setTotal(state, val){
            state.total = val
        },
        setCurrentPage(state, val){
            state.currentPage = val
        },
        setUserObj(state, val){
            state.userObj = val
        },
        setBvid(state, val){
            state.bvid = val
        },
        setAid(state, val){
            state.aid = val
        }
    }
})

export { store }