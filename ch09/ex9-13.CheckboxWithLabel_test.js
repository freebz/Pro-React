// 예제 9-13. 마운팅된 컴포넌트의 메서드 호출

jest.autoMockOff();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';

const shallowRenderer = TestUtils.createRenderer();
const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {

  // 라벨을 포함하는 체크박스 하나를 문서에 렌더링한다.
  shallowRenderer.render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  
  let checkbox = shallowRenderer.getRenderOutput();
  const component = ShallowTestUtils.getMountedInstance(shallowRenderer);
  
  it('defaults to unchecked and Off label', () => {
    const expectedChildren = [
      <input type="checkbox" checked={false} onChange={component.onChange} />,
      "Off"
    ];
    expect(checkbox.props.children).toEqual(expectedChildren);
  });

  it('changes the label after click', () => {
    component.onChange();
    checkbox = shallowRenderer.getRenderOutput();
    expect(checkbox.props.children[1]).toEqual('On');
  });
  
});
