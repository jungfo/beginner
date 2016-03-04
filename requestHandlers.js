

var exec = require("child_process").exec;

// function start(res){
//   console.log("Request handler 'start' was called.");
//
//   exec("dir", function (error, stdout, stderr) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write(stdout);
//     res.end();
//   });
// }

function start(response, data) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

//   function sleep(milliSeconds){
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }
//


function upload(res, data){
  console.log("Request handler 'upload' was called.");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello Upload: " + data);
  res.end();
}

exports.start = start;
exports.upload = upload;
