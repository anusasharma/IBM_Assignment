import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

import * as fromProducts from './products.reducer';

export interface State {
  //Products
  [fromProducts.productsFeatureKey]: fromProducts.productsState;
  }

export const reducers: ActionReducerMap<State> = {
  [fromProducts.productsFeatureKey]: fromProducts.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
