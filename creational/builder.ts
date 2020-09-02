class Home {
  walls: Number;
  doors: Number;
  windows: Number;
  roof: Number;
  garage: Boolean;
}

class HomeRender {
  walls: String;
  doors: String;
  windows: String;
  roof: String;
  garage: String;
}

abstract class HouseBuilder {
  abstract reset(): void;
  abstract buildWalls(number: Number): void;
  abstract buildDoors(number: Number): void;
  abstract buildWindows(number: Number): void;
  abstract buildRoof(number: Number): void;
  abstract buildGarage(hasGarage: Boolean): void;
}

class HomeBuilder extends HouseBuilder {
  result: Home;

  reset(): void {
    this.result = new Home();
  }

  buildWalls(number: Number): void {
    this.result.walls = number;
  }

  buildDoors(number: Number): void {
    this.result.doors = number
  }

  buildWindows(number: Number): void {
    this.result.windows = number;
  }

  buildRoof(number: Number): void {
    this.result.roof = number;
  }

  buildGarage(hasGarage: Boolean): void {
    this.result.garage = hasGarage;
  }

  getResult(): Home {
    return this.result;
  }

}

class HomeRenderBuilder extends HouseBuilder {
  result: HomeRender;

  reset(): void {
    this.result = new HomeRender();
  }

  buildWalls(number: Number): void {
    this.result.walls = `${number} fancy looking walls`;
  }

  buildDoors(number: Number): void {
    this.result.doors = `${number} fancy looking walls`;
  }

  buildWindows(number: Number): void {
    this.result.windows = `${number} fancy looking windows`;
  }

  buildRoof(number: Number): void {
    this.result.roof = `${number} fancy looking roof`;
  }

  buildGarage(hasGarage: Boolean): void {
    this.result.garage = hasGarage ? "Fancy looking garage" : "Does not have garage";
  }

  getResult(): HomeRender {
    return this.result;
  }

}

class ConstructionCompany {
  buildInfonavit(builder: HouseBuilder) {
    builder.reset();
    builder.buildGarage(false);
    builder.buildRoof(1)
    builder.buildWindows(3)
    builder.buildDoors(4);
    builder.buildWalls(6);
  }

  buildAltozano(builder: HouseBuilder) {
    builder.reset();
    builder.buildGarage(true);
    builder.buildRoof(3)
    builder.buildWindows(20)
    builder.buildDoors(40);
    builder.buildWalls(100);
  }
}



const constructor = new ConstructionCompany();
const homeBuilder = new HomeBuilder();
const homeRenderBuilder = new HomeRenderBuilder();

constructor.buildInfonavit(homeBuilder);
const infonavit: Home = homeBuilder.getResult();

constructor.buildInfonavit(homeRenderBuilder);
const infonavitRender: HomeRender = homeRenderBuilder.getResult();

console.log({
  infonavit,
  infonavitRender
});

constructor.buildAltozano(homeBuilder)
const altozano: Home = homeBuilder.getResult();

constructor.buildAltozano(homeRenderBuilder);
const altozanoRender: HomeRender = homeRenderBuilder.getResult();

console.log({
  altozano,
  altozanoRender
});

