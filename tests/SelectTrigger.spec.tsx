import React from 'react';
import SelectTrigger from '../src/SelectTrigger';
import { render } from '@testing-library/react';

describe('Select.Trigger', () => {
  it('set popupTransitionName if animation given', () => {
    const SimpleSelectTrigger = SelectTrigger as any;

    render(
      <SimpleSelectTrigger prefixCls="rc-select-pro" animation="slide-up">
        <div>foo</div>
      </SimpleSelectTrigger>,
    );

    expect(global.triggerProps.popupTransitionName).toBe('rc-select-pro-dropdown-slide-up');
  });
});
