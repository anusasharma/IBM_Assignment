import { createReducer, on } from "@ngrx/store"
import {loadProductsFailure, loadProductsReset, loadProductsSuccess} from "../actions/products.actions";
import {ProductsResult} from "../../model/_products";

export const productsFeatureKey = 'products';
export interface productsState {
  products: ReadonlyArray<ProductsResult>;
  productsLoadError: any;
}

export const initialState: productsState = {
  products: [],
  productsLoadError: null,

}

export const reducer = createReducer(initialState,
  on(loadProductsSuccess, (state, { data }) => ({ ...state, products: data })),
  on(loadProductsFailure, (state, { error }) => ({ ...state, productsLoadError: error })),
  on(loadProductsReset, (state) => ({ ...state, products: [], productsLoadError: null })),

  )
