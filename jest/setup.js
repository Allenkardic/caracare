const mockNavigation = jest.useFakeTimers();

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockNavigation;
  },
}));

jest.mock('@react-navigation/bottom-tabs', () => ({
  ...jest.requireActual('@react-navigation/bottom-tabs'),
  useNavigation: () => {
    return mockNavigation;
  },
}));

jest.mock('@react-native-async-storage/async-storage', () => {
  let cache = {};
  return {
    setItem: jest.fn((key, value) => {
      return new Promise((resolve, reject) => {
        return typeof key !== 'string' || typeof value !== 'string'
          ? reject(new Error('key and value must be string'))
          : resolve((cache[key] = value));
      });
    }),
    getItem: jest.fn((key, value) => {
      return new Promise(resolve => {
        return cache.hasOwnProperty(key) ? resolve(cache[key]) : resolve(null);
      });
    }),
    removeItem: jest.fn(key => {
      return new Promise((resolve, reject) => {
        return cache.hasOwnProperty(key)
          ? resolve(delete cache[key])
          : reject('No such key!');
      });
    }),
    clear: jest.fn(key => {
      return new Promise((resolve, reject) => resolve((cache = {})));
    }),
    getAllKeys: jest.fn(key => {
      return new Promise((resolve, reject) => resolve(Object.keys(cache)));
    }),
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
