// 예제 8-4. 템플릿을 렌더링하도록 업데이트된 server.js

import express from 'express';
const app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index', {message:'Hello World'});
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
