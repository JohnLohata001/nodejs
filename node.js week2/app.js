var http = require('http');
let state = 10
http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type": "text/html"});
  switch(req.url){
    case '/state':
    state;
     res.write(' state')
     break;
    case '/add':
    state ++
     res.write('state' + 1 )
      break;
     case '/subtract':
      state--
     res.write('state' - 1) 
      break;
      case '/reset':
       state = 10; 
       res.write('state')
       break;     
       
       default:
             res.writeHead(404, {"Content-Type": "text/html"});
             res.write('code 404: Error page')
              break;
   }
 res.end('listening port');
}).listen(8080)