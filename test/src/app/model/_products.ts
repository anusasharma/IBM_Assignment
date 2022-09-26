

export class ProductsResult {
  products: Array<Product>;
  productsCount: number;

  constructor(obj: any) {
    this.products = obj.data ? obj.data.map((product: Product) => new Product(product)) : [];
    this.productsCount = obj.length ?? 0;
  }
}



export class Product {
  id: string;
  blend_name: string;
  intensifier: string;
  uid: string;
  notes: string;
  origin: string;
  variety: string;
  constructor(obj: any) {
    this.id = obj.id ?? "";
    this.blend_name = obj.blend_name ?? "";
    this.intensifier = obj.intensifier ?? "";
    this.uid = obj.uid ?? "";
    this.notes = obj.notes ?? "";
    this.origin = obj.origin ?? "";
    this.variety = obj.variety ?? "";

  }
}



