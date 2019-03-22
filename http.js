// http port 3000 request handler create file named hello-world.txt

const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    response.end('Hello to this great world!')
};

server.listen(port, (err) => {
    if (err) {
        return console.log('You have an error: ${err}');
    } 

    console.log('Hello to this great world!');
});