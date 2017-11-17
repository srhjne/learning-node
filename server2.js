var http = require("http"),
   fs = require("fs");

fs.readFile('./head.html', function (err, head) {
   if (err) {
       response.writeHead(500);
       response.end();
   }
   fs.readFile('./foot.html', function (err, foot) {
       if (err) {
           response.writeHead(500);
           response.end();
       }
       http.createServer(function (request, response) {
           response.writeHead(200, {'Content-Type': 'text/html'});
           
           response.write(head);   
           for (i=10;i>0;i--){
               response.write(String(i)+"<br />");
           }
           response.write('Boom!!!');
           response.end(foot);
           
       }).listen(8081);
   });
});

console.log('Server running at http://127.0.0.1:8081/');