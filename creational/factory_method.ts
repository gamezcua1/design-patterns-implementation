interface Product {
  name: string;
  deliveryMethod: string;
}

const products: Product[] = [
  {name: "Laptop", deliveryMethod: "truck" },
  {name: "car", deliveryMethod: "ship" },
  {name: "Cellphone", deliveryMethod: "truck" },
]

abstract class DeliveryMethod {
  abstract deliver(product: Product): void;
}

class Truck extends DeliveryMethod {
  public deliver(product: Product) {
    console.log(`Delivering ${product.name} by truck...`)
  }
}

class Ship extends DeliveryMethod {
  public deliver(product: Product) {
    console.log(`Delivering ${product.name} by ship...`)
  }
}


class App {

  shipMethods = { 
    ship: Ship,
    truck: Truck
  }
  

  public main(): void {
    products.forEach(product => {
      const deliveryMethod = new this.shipMethods[product.deliveryMethod]

      deliveryMethod.deliver(product);
    })
  }
}


(new App).main();
