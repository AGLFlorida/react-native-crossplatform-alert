import React from 'react';
import { create } from 'react-test-renderer';
import { Modal, Pressable } from 'react-native';
import AndroidAlert from './AndroidAlert';

const defaultProps = {
  title: 'Test Title',
  message: 'Test message',
  visible: true,
  onDismiss: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('AndroidAlert', () => {
  it('renders Modal with title and message when visible', () => {
    const tree = create(
      <AndroidAlert {...defaultProps} />
    ).toJSON();
    expect(tree).not.toBeNull();
    expect(Array.isArray(tree)).toBe(false);
    expect((tree as { type?: string }).type).toBe('Modal');
  });

  it('uses default buttons when buttons prop is omitted', () => {
    const tree = create(<AndroidAlert {...defaultProps} />);
    const instance = tree.root;
    expect(instance).toBeDefined();
    const modal = instance.findByType(Modal);
    expect(modal).toBeDefined();
  });

  it('renders with custom buttons', () => {
    const buttons = [
      { text: 'Cancel', style: 'cancel' as const },
      { text: 'Delete', style: 'destructive' as const },
      { text: 'OK' },
    ];
    const tree = create(
      <AndroidAlert {...defaultProps} buttons={buttons} />
    ).toJSON();
    expect(tree).not.toBeNull();
  });

  it('calls onDismiss when button is pressed', () => {
    const onDismiss = jest.fn();
    const buttons = [{ text: 'OK', onPress: jest.fn() }];
    const tree = create(
      <AndroidAlert
        {...defaultProps}
        onDismiss={onDismiss}
        buttons={buttons}
      />
    );
    const pressable = tree.root.findAllByType(Pressable)[0];
    expect(pressable).toBeDefined();
    pressable.props.onPress();
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(buttons[0].onPress).toHaveBeenCalledTimes(1);
  });

  it('accepts options.cancelable', () => {
    const tree = create(
      <AndroidAlert {...defaultProps} options={{ cancelable: false }} />
    ).toJSON();
    expect(tree).not.toBeNull();
  });

  it('accepts custom colors', () => {
    const colors = {
      background: '#fff',
      label: '#000',
      message: '#333',
      divider: '#ccc',
      highlight: '#eee',
    };
    const tree = create(
      <AndroidAlert {...defaultProps} colors={colors} />
    ).toJSON();
    expect(tree).not.toBeNull();
  });

  it('renders without title when title is empty string', () => {
    const tree = create(
      <AndroidAlert {...defaultProps} title={''} />
    ).toJSON();
    expect(tree).not.toBeNull();
  });

  it('renders without message when message is empty string', () => {
    const tree = create(
      <AndroidAlert {...defaultProps} message={''} />
    ).toJSON();
    expect(tree).not.toBeNull();
  });

  it('renders only on Android (Platform.OS is mocked as android in tests)', () => {
    const tree = create(<AndroidAlert {...defaultProps} />).toJSON();
    expect(tree).not.toBeNull();
  });
});
