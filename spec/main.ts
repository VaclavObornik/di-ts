/// <reference path="../typings/mocha/mocha.d.ts"/>
/// <reference path="../typings/expectations/expectations.d.ts"/>
import 'expectations'

import {Injector} from '../index'
import {Engine, MockEngine, Car} from './fixtures'

describe("di.ts", () => {

  it('should instantiate a class without dependencies', () => {
    var injector = new Injector();
    var engine: Engine = injector.get(Engine);

    expect(engine instanceof Engine).toBeTruthy();
  });

  it("should instatiate a class with dependency", () => {
    var injector = new Injector();
    var car: Car = injector.get(Car);

    expect(car instanceof Car).toBeTruthy();
    expect(car.engine instanceof Engine).toBeTruthy();
  });

  it("should instatiate a class with mocked dependency", () => {
    var injector = new Injector([MockEngine]);
    var car: Car = injector.get(Car);

    expect(car instanceof Car).toBeTruthy();
    expect(car.engine instanceof MockEngine).toBeTruthy();
  });



});