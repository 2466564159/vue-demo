<template>
    <div class="pagination">
        <el-pagination
            style="text-align: center;"
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            :current-page="currentPage"
            @current-change="currentChange"
            >
        </el-pagination>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Pagination',
    data(){
        return {
        }
    },
    computed: mapState({
        pageSize: 'pageSize',
        total: 'total',
        currentPage: 'currentPage',
        searchName: 'searchName'
    }),
    methods: {
        currentChange(val){
            
            this.$axios.get('/api/getVideos?keyword='+this.searchName+'&currentPage='+val)
            .then(res => {
                this.$store.commit('setSearchResultsAction', res.data.result)
                this.$store.commit('setPageSize', res.data.pageSize)
                this.$store.commit('setTotal', res.data.total)
                this.$store.commit('setCurrentPage', val)
                sessionStorage.setItem('state', JSON.stringify(this.$store.state))
            })
        }
    }
}
</script>

<style>
.pagination{
    height: 60px;
}
</style>