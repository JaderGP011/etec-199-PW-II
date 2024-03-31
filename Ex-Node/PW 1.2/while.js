const server = createServer((resquest, response) => {
    var i = 1;
    while (i<=500) {
        response.write(i);
        i+=2;
        return response.end();
    }

});
server.listen(3332);
