import { createAction, props } from "@ngrx/store";
import {ProductsResult} from "../../model/_products";

// ALL PRODUCTS LIST
export const loadProducts = createAction(
  '[PRODUCTS] load products'
);

export const loadProductsSuccess = createAction(
  '[PRODUCTS] load products success',
  props<{ data: ProductsResult[] }>()
);

export const loadProductsFailure = createAction(
  '[PRODUCTS] load products failure',
  props<{ error: any }>()
);

export const loadProductsReset = createAction(
  '[PRODUCTS] load products reset'
);


