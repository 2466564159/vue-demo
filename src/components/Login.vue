<template>
    <div class="login">
        <div class="form">
            <el-input class="input" v-model="username" placeholder="请输入账号" size="medium"></el-input>
            <el-input class="input" v-model="password" placeholder="请输入密码" size="medium" show-password></el-input>
            <el-button class="btn" type="primary" plain size="medium" @click="submit">主要按钮</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        submit(){
            if(this.username.length>0 && this.password.length>0){
                this.$axios.post('/api/login',{
                    username: this.username,
                    password: this.password
                }).then(res => {
                    this.$store.commit('setUserObj', res.data)
                    sessionStorage.setItem('state', JSON.stringify(this.$store.state))
                    this.$router.replace('/home')
                })
            }else{
                this.$message.warning({
                    message: '用户名或密码不能为空!!!',
                    type: 'warning'
                })
            }
        }
    },
    beforeCreate(){
        if(this.$store.state.userObj){
            this.$router.replace('/home')
        }
    }
}
</script>
<style>
.login{
    width: 100%;
    height: 100%;
    overflow: auto;
}
.form{
    width: 300px;
    height: 150px;
    border: 1px solid #409eff;
    border-radius: 25px;
    box-shadow: 0 0 3px #409eff;
    padding: 30px 30px;
    margin: 200px auto;
}
.input{
    margin-bottom: 20px;
}
.btn{
    margin: 0 auto;
    display: block;
}
</style>