const http = require('node:http')

http.createServer((_request, response) => response.end('whoami\n')).listen(process.env.PORT || 8080)
