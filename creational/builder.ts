class Home {
  walls: number;
  doors: number;
  windows: number;
  roof: number;
  garage: boolean;
}

class HomeRender {
  walls: string;
  doors: string;
  windows: string;
  roof: string;
  garage: string;
}

abstract class HouseBuilder {
  abstract reset(): void;
  abstract buildWalls(number: number): void;
  abstract buildDoors(number: number): void;
  abstract buildWindows(number: number): void;
  abstract buildRoof(number: number): void;
  abstract buildGarage(hasGarage: boolean): void;
}

class HomeBuilder extends HouseBuilder {
  result: Home;

  reset(): void {
    this.result = new Home();
  }

  buildWalls(number: number): void {
    this.result.walls = number;
  }

  buildDoors(number: number): void {
    this.result.doors = number
  }

  buildWindows(number: number): void {
    this.result.windows = number;
  }

  buildRoof(number: number): void {
    this.result.roof = number;
  }

  buildGarage(hasGarage: boolean): void {
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

  buildWalls(number: number): void {
    this.result.walls = `${number} fancy looking walls`;
  }

  buildDoors(number: number): void {
    this.result.doors = `${number} fancy looking walls`;
  }

  buildWindows(number: number): void {
    this.result.windows = `${number} fancy looking windows`;
  }

  buildRoof(number: number): void {
    this.result.roof = `${number} fancy looking roof`;
  }

  buildGarage(hasGarage: boolean): void {
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

