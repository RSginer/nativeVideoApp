import { createStore } from 'redux';

import reducer from './reducers/videos';

const store = createStore(reducer, {
  videos: 'Ruben'
})

export default store;
