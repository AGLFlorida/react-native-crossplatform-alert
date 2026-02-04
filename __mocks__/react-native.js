'use strict';

// eslint-disable-next-line @typescript-eslint/no-require-imports -- Jest manual mock; CommonJS require is intentional.
const React = require('react');

const createMockComponent = (name) => {
  const Component = (props) => React.createElement(name, props, props.children);
  Component.displayName = name;
  return Component;
};

module.exports = {
  Modal: createMockComponent('Modal'),
  View: createMockComponent('View'),
  Text: createMockComponent('Text'),
  Pressable: createMockComponent('Pressable'),
  TouchableWithoutFeedback: createMockComponent('TouchableWithoutFeedback'),
  Platform: {
    OS: 'android',
    select: (obj) => obj.android ?? obj.default,
  },
  StyleSheet: {
    create: (styles) => styles,
    hairlineWidth: 1,
  },
};
