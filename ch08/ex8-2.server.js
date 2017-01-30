// 예제 8-2. server.js 파일의 소스코드

import express from 'express';
const app = express();

app.get('/', (request, response) => {
    response.send('<html><body><p>Hello World!</p></body></html>');
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
