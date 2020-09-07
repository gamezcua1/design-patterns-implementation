
abstract class Item {
  name: string
  price: number

  constructor(name: string, price?: number) {
    this.name = name
    this.price = price
  }

  abstract getTotal(): number
  abstract contains(): void
}

class Box extends Item {
  inside: Item[] = [];

  getTotal() {
    return this.inside.reduce((acc, cur) => acc += cur.getTotal(), 0)
  }

  contains() {
    console.log(`<-- 📦 ${this.name} -->`)
    this.inside.forEach((i) => i.contains())
  }

  add(item: Item) {
    this.inside.push(item)
  }

  addItems(items: Item[]) {
    items.forEach((i) => this.inside.push(i))
  }

  remove(item: Item) {
    this.inside = this.inside.filter((i) => i.name != item.name)
  }
}

class Product extends Item {
  getTotal() {
    return this.price
  }

  contains() {
    console.log(this.name)
  }
}


const phone = new Product("iPhone", 20999)
const phoneAccesories = new Box("iPhone accesories")
phoneAccesories.addItems([
  new Product("Sennheiser HD4.40", 2100),
  new Product("iPhone wireless charger", 2000)
])

const phoneBox = new Box("new iPhone 10")
phoneBox.addItems([ phone, phoneAccesories ])


const drill = new Box("Drill MAX 3000")
drill.add(new Product("Drill MAX 3000", 900))

const drillNeeded = new Box("Drill MAX 3000 included stuff")
drillNeeded.addItems([
  new Product("Drill Cable", 100),
  new Product("Battery 1000 mAh", 200)
])

const drillAccesories = new Box("Drill accesories")
drillAccesories.addItems([
  new Product("Cleaner", 100),
  new Product("Holding kit", 50)
])

const drillBox = new Box("Drill Max 3000 Starter KIT");
drillBox.addItems([
  drill,
  drillNeeded,
  drillAccesories
])

const order = new Box("Harold's order")

order.addItems([
  phoneBox,
  drillBox
])

order.contains();
console.log(`📦 Total: ${order.getTotal()}`)
