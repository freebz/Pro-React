// 예제 A-19. 애플리케이션의 엔트리 포인트에서 main.css 파일을 임포트한다.

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';

render(<Greeter />, document.getElementById('root'));
