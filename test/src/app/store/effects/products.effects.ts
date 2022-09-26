import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {ProductsService} from "../../services/products.service";
import {loadProducts, loadProductsFailure, loadProductsSuccess} from "../actions/products.actions";

@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.action$.pipe(
    ofType(loadProducts),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(offers => {
          return ({ type: loadProductsSuccess.type, data: offers })
        }),
        catchError(() => of({ type: loadProductsFailure.type }))
      ))
  ));

  constructor(
    private action$: Actions,
    private productService: ProductsService
  ) { }
}
