// 예제 9-11. react-shallow-testutils를 이용하는 CheckboxWithLabel_test.js 파일

jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const shallowRenderer = TestUtils.createRenderer();
const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {

  shallowRenderer.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  const checkbox = shallowRenderer.getRenderOutput();

  it('defaults to unchecked and Off label', () => {
    // 기본적으로 Off인지 확인한다.
    const inputField = checkbox.props.children[0];
    const textNode = checkbox.props.children[1];
    expect(inputField.props.checked).toBe(false);
    expect(textNode).toEqual('Off');
  });
});
