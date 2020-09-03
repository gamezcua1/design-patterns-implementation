interface SProduct {
  id: number;
  name: string;
  price: number;
}

const products: SProduct[] = [
  {id: 1, name: "Laptop", price: 10 },
  {id: 2, name: "car", price: 20 },
  {id: 3, name: "Cellphone", price: 30 },
]

class Store {
  private static instance: Store;

  private products = {}

  private constructor() {
    console.log("Store initialized correctly")
  }

  static getInstance() {
    if(!Store.instance) 
      Store.instance = new Store();

    return Store.instance;
  }

  saveProduct(p: SProduct) {
    this.products[p.id] = p
  }

  getProduct(id: number) {
    return this.products[id.toString()];
  }
}

const store = Store.getInstance();
console.log(store.getProduct(1))

products.forEach(p => store.saveProduct(p))

console.log(store.getProduct(1))



