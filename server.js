const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    const pathName = url.parse(request.url).pathname;
    request.setEncoding('utf8');
    let postData = ''
    request.addListener('data', (postDataChunk) => {
      postData += postDataChunk;
    })
    request.addListener('end', () => {
      route(pathName, handle, response, postData);
    })

    // response.writeHead(200, { 'Content-type': 'text/plain' });
    // response.write(`Request for ${pathName} received`)
    // response.write('\n')
    // response.write('hello world');
    // response.end();
  }
  http.createServer(onRequest).listen(5000);
}

exports.start = start;
