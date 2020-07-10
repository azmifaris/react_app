import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Topics from './views/Users';
import News from './views/News';
import List from './views/List';
import About from './views/About';

// Jest-DOM --> DOM yang ada di Browser

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react user', () => {
  const { getByText } = render(<Topics />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react user', () => {
  const { getByText } = render(<News />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react user', () => {
  const { getByText } = render(<List />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('change lenguage', () => {
  const component = renderer.create(
    <App />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance()._handleClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  component.getInstance()._handleClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test('object equality', () => {
  const iniObject = { pertama: 1 };
  iniObject['kedua'] = 2;
  expect(iniObject).toEqual({
    pertama: 1,
    kedua: 2
  });

  let sesuatu;
  expect(sesuatu).toBeUndefined();

  let iniNull = null;
  expect(iniNull).toBeNull();
  expect(iniNull).toBeDefined();
  expect(false).toBeFalsy();
  expect(true).toBeTruthy();

  let number = 4;
  expect(number).toBeGreaterThan(3);
  expect(number).toBeGreaterThanOrEqual(3);
  expect(number).toBeLessThan(5);


  let string = 'ini string';
  expect(string).not.toMatch(/a/);
  expect(string).toMatch(/i/);

  let array = [1, 2, 3];
  expect(array).toContain(1);
});