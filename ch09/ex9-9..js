// 예제 9-9. 얕은 렌더러를 이용하는 기본적인 방법

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require('../MyComponent');

const shallowRenderer = TestUtils.createRenderer();

shallowRenderer.render(<MyComponent className="MyComponent">Hello</MyComponent>);
const component = shallowRenderer.getRenderOutput();
