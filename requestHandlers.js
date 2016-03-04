

var exec = require("child_process").exec;

function start(res){
  console.log("Request handler 'start' was called.");

  exec("dir", function (error, stdout, stderr) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(stdout);
    res.end();
  });
}

//   function sleep(milliSeconds){
//     var startTime = new Date().getTime();
//     while (new Date().getTime() < startTime + milliSeconds);
//   }
//
//   sleep(10000);
//   return "Hello Start";
// }

function upload(res){
  console.log("Request handler 'upload' was called.");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello Upload");
  res.end();
}

exports.start = start;
exports.upload = upload;
