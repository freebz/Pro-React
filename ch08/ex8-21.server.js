// 예제 8-21. server.js의 1단계 업데이트

import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from './app/routes';

const app = express();

app.set('views', './')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync(__dirname + '/public/contacts.json', 'utf8'));

let renderRoute = (response, renderProps) => {
    // 실제 렌더링을 이곳으로 옮긴다.
};

app.get('*', (request, response) => {
    match({ routes, location: request.url }, (error, redirectLocation, renderProps) => {
	if (error) {
	    response.status(500).send(error.message);
	} else if (redirectLocation) {
	    response.redirect(302, redirectLocation.pathname + redirectLocation.search);
	} else if (renderProps) {
	    renderRoute(response, renderProps);
	} else {
	    response.status(404).send('Not found');
	}
    });
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});
