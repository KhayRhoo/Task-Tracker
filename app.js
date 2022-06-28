// const http = require('http');
// const fs = require('fs');
// const port = 3306;

// const server = http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     fs.readFile('front-end/index.html', function(error, data){
//         if(error){
//             res.writeHead(404);
//             res.write('Error: file not found');
//         }else{
//             res.write(data);
//         }
//         res.end();
//     })
// });

// server. listen(port, function(error){
//     if(error){
//         console.log('something is wrong');
//     }else{
//         console.log('server is listening on ' + port + ' port');
//     }
// });

const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//data
app.post('/insert', (req, res) => {

});

//
app.get('/getAll', (req, res) => {
    console.log('test');
});

//edit


//delete