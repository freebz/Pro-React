// 예제 A-14. ES6 모듈 정의를 이용하고 리액트 컴포넌트를 렌더링하도록 main.js를 리팩터링

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));
