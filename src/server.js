const http = require('http');
const app = require('./app');
const { PORT } = require('./utils/constant');

http.createServer(app).listen(PORT, () => console.log(`GraphQL Gateway is running on PORT: ${PORT}`));