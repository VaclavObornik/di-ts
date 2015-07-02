

import {Inject, Provide} from '../index'




export class Engine {

}

export class Doors {

}


@Inject
export class Car {
  constructor(public engine: Engine, public doors:Doors) {}
}

@Provide(Engine)
export class MockEngine {

}
