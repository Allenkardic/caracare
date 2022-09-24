import 'react-native';
import React from 'react';
import Favourite from '../src/screens/favourite/favourite';

import renderer from 'react-test-renderer';
import {testAppSelector} from '../src/redux/test-app-selector';
import {useAppSelector} from '../src/redux/redux-hooks';

jest.mock('../src/redux/redux-hooks');

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Favourite Screen', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testAppSelector);
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    let props: any;
    props: createTestProps;
    const tree = renderer.create(<Favourite {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
