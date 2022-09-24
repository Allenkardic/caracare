import 'react-native';
import React from 'react';
import CharacterDetails from '../src/screens/home/characterDetails';

import renderer from 'react-test-renderer';
import {testAppSelector} from '../src/redux/test-app-selector';
import {useAppSelector} from '../src/redux/redux-hooks';

jest.mock('../src/redux/redux-hooks');

const createTestProps = (props: Object) => ({
  ...props,
});

describe('Character Details Screen', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testAppSelector);
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    let props: any;
    props: createTestProps;
    const mockedParams = {
      route: {
        params: 1,
      },
    };
    const tree = renderer
      .create(<CharacterDetails {...props} {...mockedParams} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
