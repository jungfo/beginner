

function route(handle, pathname, res) {
  console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function'){
    return handle[pathname](res);
  } else {
    console.log ("No request handler found for " + pathname);

    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write("404 Not found");
    res.end();
  }
}

exports.route = route;
