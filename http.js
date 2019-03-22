// http port 3000 request handler create file named hello-world.txt

const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    response.end(fs.writeFile('hello-world.txt', 'Hello to this great World!', 'utf8', (err) => {
        if (err) throw err;

        console.log('Hello, world')
    }))
};

server.listen(port, (err) => {
    if (err) {
        return console.log('You have an error: ${err}');
    } 

    console.log('success');
});