/* eslint-disable no-undef */
jest.mock("@react-native-firebase/database", () => {
  return () => ({
    firebase: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn()
  });
});

jest.mock("@react-native-firebase/app", () => {
  return () => ({
    firebase: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn()
  });
});
