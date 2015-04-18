

# Dependency Injection for Typescript
Lightweight wrap and extension of [angular/di.js](https://github.com/angular/di.js) for TypeScript.


## Install
````bash
npm install di-ts
````

## Usage
 
You need to use --emitDecoratorMetadata flag when compile you typescript files. This flag is not supported
in the last released version of TypeScript, you need to download and use last commit of 
[master branch](https://github.com/Microsoft/TypeScript/tree/master).

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
/// <reference path="node_modules/di-ts/di-ts.d.ts"/>

import {Injector} from 'di-ts'
import {Car} from './car'
import {Engine, MockEngine} from './engine'


var injector = new Injector();
var car: Car = injector.get(Car); //instantiate car, car.engine is magically instance of Engine! :)


var injector2 = new Injector([MockEngine]);
var car2: Car = injector2.get(Car); //instantiate car, car.engine is instance of MockEngine! :)
```



