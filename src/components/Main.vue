<template>
  <div class="main">
    <SearchInput></SearchInput>
    <router-view></router-view>
    <router-view name="Pagination"></router-view>
  </div>
</template>

<script>
import SearchInput from './SearchInput'
export default {
  name: 'Main',
  components: {
      SearchInput,
  },
  beforeCreate(){
      if(!this.$store.state.userObj){
          this.$router.replace('/')
      }
  }
}
</script>

<style>
  .main{
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
