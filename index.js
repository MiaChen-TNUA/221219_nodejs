console.log('hello ~')

// 使用內建模組 ( module ) / 套件 ( package )
const os = require('os')
console.log(os.hostname())
// // CPU 的字节序
// console.log('endianness : ' + os.endianness());
// // 操作系统名
// console.log('type : ' + os.type());
// // 操作系统名
// console.log('platform : ' + os.platform());
// // 系统内存总量
// console.log('total memory : ' + os.totalmem() + " bytes.");
// // 操作系统空闲内存量
// console.log('free memory : ' + os.freemem() + " bytes.");

/////////// REQUEST ///////////
// const request = require('request')
// request({ url: 'https://tw.movies.yahoo.com/movie_thisweek.html',
// json: true
// }, (error, response, body) => {
// // console.log(body)  
// console.log(JSON.stringify(body, null, 2))
// })

//
const greeting = require('./src/greeting');

greeting.hello()

//載入express 模組
const express=require("express");

//建立 application 物件
const app=express();

//設定路徑 / 對應的路由函式
app.get("/",function(req, res){
res.send("妳好啊，妳翹課哦！")
});

//設定路徑 /getData 對應的路由函式
app.get("/getData",function(req, res){
res.send("被我抓到了喔！")
});

//啟動伺服器在測試網址 http://localhost:3000
app.listen(3000, function(){
console.log("Server started");
})