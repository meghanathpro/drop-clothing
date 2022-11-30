import { combineReducers } from "redux";
import { userRdeucer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
  user: userRdeucer,
  categories: categoriesReducer,
});
