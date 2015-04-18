

import {Inject, Provide} from '../index'


@Inject
export class Car {
  constructor(public engine: Engine) {}
}

export class Engine {

}

@Provide(Engine)
export class MockEngine {

}