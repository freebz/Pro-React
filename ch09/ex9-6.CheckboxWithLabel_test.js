// 예제 9-6. CheckboxWithLabel.js

jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {
  // 라벨을 포함하는 체크박스 하나를 문서에 렌더링한다.
  var checkbox = TestUtils.renderIntoDocument(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  var checkboxNode = ReactDOM.findDOMNode(checkbox);

  it('defaults to Off label', () => {
    // 기본적으로 Off인지 확인한다.
    expect(checkboxNode.textContent).toEqual('Off');
  });
});
