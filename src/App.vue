<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  created(){
    var strObj = sessionStorage.getItem("state")
    if(strObj){
      var obj = JSON.parse(strObj)
      this.$store.replaceState(obj)
    }
  }
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
}
html, body{
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
