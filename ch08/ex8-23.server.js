// 예제 8-23. 업데이트된 server.js 파일의 전체 소스코드

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

// 도우미 함수: renderProps 객체의 모든 컴포넌트를 순회해
// 원하는 키가 포함된 새로운 객체 하나를 반환한다.
let getPropsFromRoute = ({routes}, componentProps) => {
    let props = {};
    let lastRoute = routes[routes.length - 1];
    routes.reduceRight((prevRoute, currRoute) => {
	componentProps.forEach(componentProp => {
	    if (!props[componentProp] && currRoute.component[componentProp]) {
		props[componentProp] = currRoute.component[componentProp];
	    }
	});
    }, lastRoute);
    return props;
};

let renderRoute = (response, renderProps) => {
    // renderProps 객체를 순회해 'requestInitialData'를 찾는다.
    let routeProps = getPropsFromRoute(renderProps, ['requestInitialData']);
    if (routeProps.requestInitialData) {
	// 'requestInitialData'를 구현하는 컴포넌트가 있는 경우 이를 호출한다.
	routeProps.requestInitialData().then((data) => {
	    // 리액트 라우터의 요소 생성 함수를 재정의하고
	    // 미리 가져온 데이터를 initialData 속성을 통해 전달한다.
	    let handleCreateElement = (Component, props) => (
		    <Component initialData={data} {...props} />
	    );
	    // RoutingContext와 로드한 데이터를 이용해 템플릿을 렌더링한다.
	    response.render('index', {
		reactInitialData: JSON.stringify(data),
		content: renderToString(
		    <RoutingContext createElement={handleCreateElement} {...renderProps} />
		)
	    });
	});
    } else {
	// 이 라우트에 'requestInitialData'를 구현하는 컴포넌트가 없는 경우
	// initialData 없이 RoutingContext를 이용해 템플릿을 렌더링한다.
	response.render('index', {
	    reactInitialData: null,
	    content: renderToString(<RoutingContext {...renderProps} />)
	});
    }
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
