<template>
    <div class="search-input">
        <el-row>
            <el-col :span="16">
                <el-input
                    prefix-icon="el-icon-search"
                    size="small" 
                    type="text" 
                    placeholder="请输入你想要了解的游戏"
                    v-model="searchName"
                    @keyup.enter="getGames"
                ></el-input>
            </el-col>
            <el-col :span="8" v-if="userObj">
                <div class="userDetail">
                    <el-avatar size="small" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
                    <span class="word"> {{userObj.name}}</span>
                    <span class="word"> {{userObj.age}}</span>
                    <span class="word"> {{userObj.sex ? '女' : '男'}}</span>
                    <el-button style="float: right;" size="mini" type="danger" round @click="logout">退出登录</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'SearchInput',
    data(){
        return {
        }
    },
    computed: {
        searchName: {
            get () {
                return this.$store.state.searchName
            },
            set (val) {
                this.$store.commit('setSearchNameAction', val)
            }
        },
        ...mapState({
            userObj: 'userObj',
        })
    },
    methods: {
        getGames(){
            this.$axios.get('/api/getVideos?keyword='+this.$store.state.searchName)
            .then(res => {
                this.$store.commit('setSearchResultsAction', res.data.result)
                this.$store.commit('setPageSize', res.data.pageSize)
                this.$store.commit('setTotal', res.data.total)
                this.$store.commit('setCurrentPage', 1)
                sessionStorage.setItem('state', JSON.stringify(this.$store.state))
                this.$router.push('/home')
            })
        },
        logout(){
            sessionStorage.setItem('state', '')
            location.replace('/');
        }
    }
}
</script>

<style>
    .search-input{
        margin: 20px auto;
        width: 700px;
    }
    .userDetail{
        padding-top: 2px;
        margin-left: 30px;
        height: 30px;
    }
    .word{
        vertical-align: super;
        margin-left: 5px;
        color: black;
    }
</style>