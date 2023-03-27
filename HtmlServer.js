const http = require('http');
const {readFileSync} = require('fs')

const homePage = readFileSync('./Home.html')

http.createServer((req , res) => {
    let url = req.url;
    if(url === '/'){
        res.writeHead(200 , {'content-type' : 'text/html'});
        res.write(homePage)
        res.end();
    }
}).listen(5000)

console.log('Listening to port 5000');