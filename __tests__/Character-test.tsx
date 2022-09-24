import 'react-native';
import React from 'react';
import Characters from '../src/screens/home/characters';

import renderer from 'react-test-renderer';
import {testAppSelector} from '../src/redux/test-app-selector';
import {useAppSelector, useAppDispatch} from '../src/redux/redux-hooks';

jest.mock('../src/redux/redux-hooks');

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Characters Screen uses props', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testAppSelector);
    useAppDispatch.mockImplementation(() => jest.fn);
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    let props: any;
    props: createTestProps;
    const tree = renderer.create(<Characters {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
