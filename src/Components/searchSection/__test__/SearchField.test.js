import React from 'react';
import SearchField from '../SearchField';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../../redux/configureStore.js';

test('SearchField snapshot test',()=>{
  const component = renderer.create(
    <Provider store={store}>
      <SearchField />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})