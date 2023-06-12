import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import colorReducer from './colorReducer';
import newBlogReducer from './newBlogReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  blog: blogReducer,
  filter: colorReducer,
  newBlog: newBlogReducer,
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
