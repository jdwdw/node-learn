function route(pathname, handle, response, postData) {
  console.log(`route ${pathname}`)
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
    console.log(`no request handler ${pathname}`);
    response.writeHead(404, { 'Content-type': 'text/plain' });
    response.write('404 Not found');
    response.end();
  }
}
exports.route = route;
