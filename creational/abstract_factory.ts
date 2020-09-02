abstract class Chair {
  abstract sitOn(): void;
}

class VictorianChair extends Chair {
  public sitOn() {
    console.log("Sitting on a VICTORIAN Chair");
  }
}

class ModernChair extends Chair {
  public sitOn() {
    console.log("Sitting on a MODERN Chair");
  }
}

abstract class Table {
  abstract put(): void;
}

class VictorianTable extends Table {
  public put() {
    console.log("Putting on a VICTORIAN Table ")
  }
}

class ModernTable extends Table {
  public put() {
    console.log("Putting on a MODERN Table");
  }
}

abstract class Furniture {
  abstract createTable(): Table;
  abstract createChair(): Chair;
}

class VictorianFurniture extends Furniture {
  
  public createTable() {
    return new VictorianTable();
  }

  public createChair() {
    return new VictorianChair();
  }

}

class ModernFurniture extends Furniture {
  public createTable() {
    return new ModernTable();
  }

  public createChair() {
    return new ModernChair();
  }
}

class AFApp {
  furniture : Furniture = null;
  table : Table = null;
  chair : Chair = null;

  constructor(furniture: Furniture) {
    this.furniture = furniture;
  }

  public createFurniture(): void {
    this.table = this.furniture.createTable();
    this.chair = this.furniture.createChair();
  }

  public main(): void {
    this.table.put()
    this.chair.sitOn()
  }
}

const victorian = new VictorianFurniture();
const modern = new ModernFurniture();


const victorian_app = new AFApp(victorian);
const modern_app = new AFApp(modern);

victorian_app.createFurniture()
modern_app.createFurniture();

victorian_app.main();
modern_app.main();

