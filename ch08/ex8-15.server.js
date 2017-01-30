// 예제 8-15. JSON 형식의 연락처 리스트로 컨텍스트 script 태그를 채우는 업데이트된 server.js 파일

import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactsApp from './app/components/ContactsApp';

const app = express();
app.set('views', './')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync(__dirname + '/public/contacts.json', 'utf8'));

const ContactsAppFactory = React.createFactory(ContactsApp);

app.get('/', (request, response) => {
    let componentInstance = ContactsAppFactory({initialData:contacts});
    response.render('index', {
	reactInitialData: JSON.stringify(contacts),
	content: renderToString(componentInstance)
    });
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
