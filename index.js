const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url,true).query.id;
    console.log(`"${req.url}" requested`);
    
    if(pathName==='/index' || 
        pathName=== '' || 
        pathName === '/')
        {
            res.writeHead(200, {'Content-type' : 'text/html'});
            fs.readFile(`${__dirname}/index.html`, 'utf-8', (err,data) =>{
                res.end(data);
            }
            );
    }
    else if(pathName ==='/menunav'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/menunav/index.html`, 'utf-8', (err,data) => {
            res.end(data);
            }
        );
    }

    else if(pathName ==='/colorboxes'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/colorboxes/index.html`, 'utf-8', (err,data) => {
            res.end(data);
            }
        );
    }

    else if(pathName ==='/2020'){
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/2020/index.html`, 'utf-8', (err,data) => {
            res.end(data);
            }
        );
    }

    else if(pathName === '/2020/style.css') {
        
        fs.readFile(`${__dirname}/2020/style.css`, (err,data) => {
            res.writeHead(200, { 'Content-type': 'text/html'});
            res.end(data);
        })
    }
    
    else {                                           
        res.writeHead(404, {'Content-type': 'text/html'});
        res.end('request not found');
    }

});

server.listen(1337, '127.0.0.1', () => {
    console.log('Listening for requests on port: 1337');
})