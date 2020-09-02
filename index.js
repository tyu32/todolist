const http = require('http');
const Express = require('express');
const Sequelize = require('sequelize');

const app = Express();

const sequelize = new Sequelize('postgres://user:localhost:5432/dbname')

app.get('/', (req, res) =>{
    res.send('Hello, World\n')
});

app.listen(8000, () => {
    console.log('示例程序正在监听 8000 端口！')
});

// http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type' : 'text/plain'});
//     response.end('Hello World\n');
// }).listen(8000);

// console.log('server address http://127.0.0.1:8000/')