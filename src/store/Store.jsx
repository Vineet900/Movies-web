import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice";
import tvReducer from "./reducers/tvSlice";
import personReducer from "./reducers/personslice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
  },
});
