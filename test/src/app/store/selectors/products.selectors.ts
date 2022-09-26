import { createSelector } from "@ngrx/store";
import { State } from "../reducers";
import {productsState} from "../reducers/products.reducer";


export const selectProductsFeature = (state: State) => state.products;

export const selectProducts = createSelector(
  selectProductsFeature,
  (state: productsState) => state ? state.products : []
)

