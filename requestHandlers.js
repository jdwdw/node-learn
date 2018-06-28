const exec = require('child_process').exec;
const querystring = require('querystring');

function start(response) {
  // exec('ls -lah', (error, stdout) => {
  //   response.writeHead(200, { 'Content-type': 'text/plain' });
  //   console.log('stdout', stdout);

  //   response.write(stdout)
  //   response.end();
  // })

  const body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />' +
    '</form>' +
    '</body>' +
    '</html>';
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.write(body)
  response.end();
}

function upload(response, postData) {
  response.writeHead(200, { 'Content-type': 'text/plain' });
  response.write(`upload handler receive:${querystring.parse(postData).text}`)
  response.end();
}

exports.start = start;
exports.upload = upload;
