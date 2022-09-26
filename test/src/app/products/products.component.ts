import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Store} from "@ngrx/store";
import {loadProducts} from "../store/actions/products.actions";
import {selectProducts} from "../store/selectors/products.selectors";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService, private store: Store<any>) { }

  products: any;
  p = 1;
  count = 10;

  ngOnInit(): void {
    this.store.dispatch(loadProducts());

    this.store.select(selectProducts).subscribe(data => {
      this.products = data;
    })
  }

}
