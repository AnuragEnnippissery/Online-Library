import { configureStore} from "@reduxjs/toolkit";
import bookReducer from './bookslice.js';


const appStore=configureStore({
  reducer: {
    books: bookReducer
  }
});

export default appStore