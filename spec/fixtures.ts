

import {Inject, Provide} from '../index'




export class Engine {

}

@Inject
export class Car {
  constructor(public engine: Engine) {}
}

@Provide(Engine)
export class MockEngine {

}