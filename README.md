

# Dependency Injection for Typescript
Lightweight wrap and extension of [di.js](https://github.com/angular/di.js) for TypeScript.


## Install
````bash
npm install di-ts
````

## Usage
 
You need to use --emitDecoratorMetadata flag when compile you typescript files. 
"emitDecoratorMetadata" flag is supported by the 1.5 beta version of TypeScript.

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
export class Engine {

}
```

### mockEngine.ts
```typescript
import {Provide} from 'di-ts'
import {Engine} from './engine'

@Provide(Engine)
export class MockEngine {

}
```

### main.ts
```typescript
/// <reference path="node_modules/di-ts/di-ts.d.ts"/>

import {Injector} from 'di-ts'
import {Car} from './car'
import {Engine} from './engine'

var injector = new Injector();
var car: Car = injector.get(Car); //instantiate car, car.engine is magically instance of Engine! :)


import {MockEngine} from './mockEngine'
var injector2 = new Injector([MockEngine]);
var car2: Car = injector2.get(Car); //instantiate car, car.engine is instance of MockEngine! :)
```


