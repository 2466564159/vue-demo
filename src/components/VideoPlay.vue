<template>
    <div class="videoPlay">
        <iframe
            class="video"
            :src="'//player.bilibili.com/player.html?aid='+aid+'&bvid='+bvid"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true">
        </iframe>
    </div>
</template>
<script>
export default {
    name: 'VideoPlay',
    data(){
        return {
        }
    },
    computed: {
        bvid(){
            return this.$store.state.bvid
        },
        aid(){
            return this.$store.state.aid
        }
    }
}
</script>
<style>
    .video{
        display: block;
        margin: 0 auto;
        width: 1000px;
        height: 600px;
    }
</style>