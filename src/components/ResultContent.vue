<template>
  <div class="result-content">
        <el-row>
            <el-col :span="5" :offset="1" v-for="result in searchResults" :key="result.id" >
                <el-card 
                  :body-style="{ padding: '0px', height: '200px' }" 
                  style="margin: 0 0 20px 0;cursor: pointer;"
                  @click="playVideo(result.aid,result.bvid)"
                >
                    <img :src="result.pic" class="image" />
                    <div style="padding: 10px">
                        <div style="font-size: 12px; height: 40px;overflow: hidden;" v-html="result.title" ></div>
                        <div style="font-size: 12px;color: #99a2aa; margin-top: 10px">
                            <i class="el-icon-video-play"></i>{{ getPlay(parseInt(result.play)) }}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="el-icon-time"></i>{{getDate(parseInt(result.pubdate))}}
                        </div>
                    </div>
                </el-card>

            </el-col>
        </el-row>
        
  </div>
</template>

<script>
export default {
  name: "ResultContent",
  data(){
      return{
      }
  },
  computed: {
    searchResults(){
      return this.$store.state.searchResults
    }
  },
  methods: {
    getDate(Unix) {
      var date = new Date(Unix * 1000);
      return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    },
    getPlay(play) {
      if (play > 10000) {
        play = play / 10000;
        play += "";
        play = play.substring(0, play.indexOf(".") + 2) + "万";
      }
      return play;
    },
    playVideo(aid, bvid){
      this.$store.commit('setBvid', bvid)
      this.$store.commit('setAid', aid)
      this.$router.push('/home/video')
    }
  },
};
</script>

<style>
.result-content {
  margin: 0 auto;
  width: 950px;
}
.image{
    width: 100%;
    height: 100px;
}
</style>