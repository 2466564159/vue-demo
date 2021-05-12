var express = require('express')
var axios = require('axios')
var app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/getVideos', function (req, res) {
  var keyword = req.query.keyword || 'vue'
  var currentPage = req.query.currentPage || 1
  axios.get('https://api.bilibili.com/x/web-interface/search/all/v2?keyword='+encodeURI(keyword)+'&page='+currentPage)
    .then(result => {
      var data = result.data.data
      var obj = {
        pageSize: data.pagesize,
        total: data.top_tlist.video,
        result: data.result[data.result.length-1].data
      }
      res.send(obj)
    })
})

app.post('/login', function(req, res){
  var username = req.body.username
  var password = req.body.password

  var obj = {
    id: "0002010",
    username: username,
    password: '',
    name: '张三',
    age: 18,
    sex: 0
  }
  res.send(JSON.stringify(obj))
})

var server = app.listen(8081, function () {
  console.log("应用实例，访问地址为 http://localhost:8081/")
})