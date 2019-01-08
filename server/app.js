const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

//app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var options = {
    target: 'http://127.0.0.1:8089', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        '^/nodeApi': '/', // rewrite path
    }
}
  

//代理服务器
app.use(express.static(path.join(__dirname, '../static')));
app.use('/nodeApi', proxy(options));

let server = app.listen(18000, () =>{
    console.log(`started the server,the port is 18000`);
});
