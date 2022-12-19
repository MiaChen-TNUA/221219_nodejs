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