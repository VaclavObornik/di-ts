

# Dependency Injection for Typescript
Lightweight wrap and extension of [angular/di.js](https://github.com/angular/di.js) for TypeScript.


## Usage
### car.ts
```typescript
import {Inject} from 'di-ts'
import {Engine} from './engine'

@Inject
export class Car {
  constructor(public engine: Engine) {}
}
```

### engine.ts
```typescript
import {Injector} from 'di-ts'

export class Engine {

}

@Provide(Engine)
export class MockEngine {

}
```

### main.ts
```typescript
/// <reference path="node_modules/di-ts/index.d.ts"/>

import {Injector} from 'di-ts'
import {Car} from './car'
import {Engine, MockEngine} from './engine'


var injector = new Injector();
var car: Car = injector.get(Car); //instantiate car, car.engine is magically instance of Engine! :)


var injector2 = new Injector([MockEngine]);
var car2: Car = injector2.get(Car); //instantiate car, car.engine is instance of MockEngine! :)
```



